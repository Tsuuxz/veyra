# VEYRA - Sistema de Autenticação

## 📋 Visão Geral

Sistema completo de autenticação implementado com Supabase Auth, incluindo páginas, guards, middleware e hooks.

## 🔐 Páginas Implementadas

### `/login` - Login
- **Campos**: Email, Password, Remember me
- **Validação**: Email format, senha mínimo 6 caracteres
- **Features**:
  - Link para forgot password
  - Link para criar conta
  - Feedback de erros inline
  - Loading state durante autenticação
  - Redirecionamento automático para /dashboard
- **Layout**: Split screen (branding left, form right)
- **Mobile**: Form centralizado com logo no topo

### `/register` - Cadastro
- **Campos**: Nome, Email, Password, Confirm Password, Accept Terms
- **Validação**: 
  - Nome mínimo 3 caracteres
  - Email válido
  - Senha mínimo 6 caracteres
  - Senhas devem coincidir
  - Termos devem ser aceitos
- **Features**:
  - Links para termos e privacidade
  - Link para login
  - Confirmação de email após registro
  - Feedback de erros inline
- **Layout**: Mesmo layout do login

### `/forgot-password` - Recuperar Senha
- **Campos**: Email
- **Validação**: Email válido
- **Features**:
  - Envio de email de recuperação
  - Tela de sucesso com instrução
  - Link para voltar ao login
  - Opção de reenviar email
- **Fluxo**:
  1. Usuário insere email
  2. Sistema envia link de recuperação
  3. Tela de confirmação exibida

### `/reset-password` - Redefinir Senha
- **Campos**: Nova senha, Confirmar nova senha
- **Validação**:
  - Senha mínimo 6 caracteres
  - Senhas devem coincidir
- **Features**:
  - Tela de sucesso após redefinição
  - Redirecionamento automático para login
  - Validação de token (via Supabase)
- **Acesso**: Via link enviado por email

## 🛡️ Proteção de Rotas

### Middleware (`middleware.ts`)
Executado em todas as rotas (exceto estáticos), responsável por:

**Rotas Públicas** (`/`, `/pricing`, `/docs`):
- Acessíveis sem autenticação

**Rotas de Auth** (`/login`, `/register`, `/forgot-password`, `/reset-password`):
- Se usuário autenticado → redireciona para `/dashboard`
- Se não autenticado → permite acesso

**Rotas Protegidas** (`/dashboard/*`):
- Se não autenticado → redireciona para `/login?redirect=<current-path>`
- Se autenticado → permite acesso

**Rotas Admin** (`/admin/*`):
- Se não autenticado → redireciona para `/login`
- Se autenticado mas não admin → redireciona para `/dashboard`
- Se admin → permite acesso

### Auth Guards

#### `<AuthGuard>`
Componente para proteger páginas client-side:

```tsx
<AuthGuard requireAuth={true} requireAdmin={false}>
  {children}
</AuthGuard>
```

**Props**:
- `requireAuth`: Requer autenticação (default: true)
- `requireAdmin`: Requer role ADMIN (default: false)

**Comportamento**:
- Mostra loading durante verificação
- Redireciona se não autorizado
- Renderiza children se autorizado

#### `<RedirectIfAuthenticated>`
Redireciona usuários já autenticados:

```tsx
<RedirectIfAuthenticated redirectTo="/dashboard">
  {children}
</RedirectIfAuthenticated>
```

**Uso**: Páginas de auth para evitar que usuários logados acessem

## 🎣 Hook useAuth

Hook principal de autenticação:

```tsx
import { useAuth } from '@/hooks/useAuth';

const {
  user,              // User object do Supabase
  profile,           // Profile do banco de dados
  isLoading,         // Loading state
  isAuthenticated,   // Boolean de autenticação
  isAdmin,           // Function que retorna se é admin
  login,             // (email, password) => Promise
  register,          // (name, email, password) => Promise
  logout,            // () => Promise
  forgotPassword,    // (email) => Promise
  resetPassword,     // (password) => Promise
} = useAuth();
```

### Métodos

#### `login(email, password)`
```tsx
const result = await login('user@example.com', 'password123');
// result = { success: true } | { success: false, error: string }
```

- Autentica usuário
- Carrega profile
- Exibe toast de sucesso/erro
- Redireciona para /dashboard

#### `register(name, email, password)`
```tsx
const result = await register('John Doe', 'user@example.com', 'password123');
```

- Cria conta no Supabase
- Envia email de confirmação
- Exibe toast de sucesso
- Redireciona para /login

#### `logout()`
```tsx
await logout();
```

- Faz logout do Supabase
- Limpa stores
- Exibe toast
- Redireciona para /login

#### `forgotPassword(email)`
```tsx
const result = await forgotPassword('user@example.com');
```

- Envia email de recuperação
- Email contém link para /reset-password

#### `resetPassword(newPassword)`
```tsx
const result = await resetPassword('newPassword123');
```

- Atualiza senha do usuário
- Requer token válido (via URL do email)

#### `isAdmin()`
```tsx
if (isAdmin()) {
  // User has ADMIN role
}
```

- Verifica se profile.role === 'ADMIN'

## 🗄️ Estado de Autenticação

### AuthStore (Zustand)
```tsx
import { useAuthStore } from '@/lib/stores/authStore';

const {
  user,              // Supabase user
  profile,           // Database profile
  isLoading,         // Loading state
  isAuthenticated,   // Auth status
  setUser,           // Update user
  setProfile,        // Update profile
  setLoading,        // Update loading
  logout,            // Clear auth state
} = useAuthStore();
```

**Persistência**: Gerenciada pelo Supabase (cookies/localStorage)

## 📡 Provider de Autenticação

### `<Providers>`
Provider principal que:

1. Inicializa autenticação ao carregar app
2. Busca session do Supabase
3. Carrega profile do usuário
4. Escuta mudanças de auth state
5. Atualiza stores automaticamente

**Uso**: Já incluído no `app/layout.tsx`

## 🔄 Fluxo de Autenticação

### Registro
```
1. Usuário acessa /register
2. Preenche formulário
3. Submit → useAuth.register()
4. Supabase cria user
5. Trigger cria profile na tabela profiles
6. Email de confirmação enviado
7. Usuário confirma email
8. Pode fazer login
```

### Login
```
1. Usuário acessa /login
2. Preenche email e senha
3. Submit → useAuth.login()
4. Supabase autentica
5. Session criada
6. Profile carregado do banco
7. Stores atualizados
8. Redireciona para /dashboard
```

### Recuperação de Senha
```
1. Usuário acessa /forgot-password
2. Insere email
3. Submit → useAuth.forgotPassword()
4. Supabase envia email com link
5. Link aponta para /reset-password?token=...
6. Usuário acessa link
7. Define nova senha
8. Submit → useAuth.resetPassword()
9. Senha atualizada
10. Redireciona para /login
```

### Logout
```
1. Usuário clica em logout
2. useAuth.logout()
3. Supabase destroi session
4. Stores limpos
5. Redireciona para /login
```

## 🎨 Layout de Auth

### Desktop
- **Left Side (50%)**:
  - Background com gradient
  - Logo VEYRA
  - Headline e descrição
  - Features list
  - Footer

- **Right Side (50%)**:
  - Form centralizado
  - Max-width: 400px

### Mobile
- Logo no topo
- Form centralizado
- Full width com padding
- Sem sidebar de branding

## ✅ Validações

### Email
- Formato válido (regex)
- Obrigatório

### Senha
- Mínimo 6 caracteres
- Obrigatória

### Nome
- Mínimo 3 caracteres
- Obrigatório (registro)

### Confirmação de Senha
- Deve coincidir com senha
- Obrigatória (registro e reset)

### Termos
- Deve ser aceito (registro)

## 🔐 Segurança

### Client-Side
- Validação de inputs
- Sanitização de dados
- HTTPS obrigatório
- Proteção contra XSS

### Server-Side (Supabase)
- Rate limiting automático
- Hash de senhas (bcrypt)
- Session tokens seguros
- CORS configurado
- RLS policies ativas

### Tokens
- JWT com expiration
- Refresh tokens automáticos
- Invalidação em logout

## 📧 Emails

Emails enviados pelo Supabase:

1. **Confirmação de Cadastro**
   - Enviado após register
   - Link de confirmação
   - Expira em 24h

2. **Recuperação de Senha**
   - Enviado após forgot-password
   - Link de reset
   - Expira em 1h

3. **Mudança de Email**
   - Enviado ao atualizar email
   - Confirmação necessária

**Customização**: Configurar templates no Supabase Dashboard

## 🚀 Próximos Passos

- [ ] Configurar templates de email personalizados
- [ ] Implementar login social (Google, GitHub)
- [ ] Adicionar 2FA (Two-Factor Authentication)
- [ ] Implementar magic link (passwordless)
- [ ] Rate limiting adicional
- [ ] Captcha em formulários sensíveis
- [ ] Logs de tentativas de login
- [ ] Notificações de segurança

## 📝 Variáveis de Ambiente

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## 🧪 Testes

### Fluxo de Registro
1. Acessar /register
2. Preencher todos os campos
3. Aceitar termos
4. Submeter
5. Verificar email
6. Confirmar cadastro
7. Fazer login

### Fluxo de Login
1. Acessar /login
2. Inserir credenciais válidas
3. Submeter
4. Verificar redirecionamento para /dashboard
5. Verificar dados do usuário carregados

### Fluxo de Recuperação
1. Acessar /forgot-password
2. Inserir email válido
3. Verificar email recebido
4. Clicar no link
5. Definir nova senha
6. Verificar login com nova senha

### Proteção de Rotas
1. Tentar acessar /dashboard sem login → redireciona para /login
2. Tentar acessar /admin sem ser admin → redireciona para /dashboard
3. Tentar acessar /login logado → redireciona para /dashboard

## ✅ Status

- [x] Páginas de autenticação (Login, Register, Forgot, Reset)
- [x] Layout de auth
- [x] Hook useAuth completo
- [x] AuthStore (Zustand)
- [x] Middleware de proteção
- [x] Auth Guards (client-side)
- [x] Integração com Supabase
- [x] Validações de formulários
- [x] Feedback de erros
- [x] Loading states
- [x] Toasts de sucesso/erro
- [x] Redirecionamentos automáticos
- [x] Responsividade
- [ ] Templates de email customizados
- [ ] Login social
- [ ] 2FA
