# Deploy da VEYRA na Vercel

## 🚀 Guia Completo de Deploy

### Pré-requisitos

1. Conta na [Vercel](https://vercel.com)
2. Conta no [Supabase](https://supabase.com)
3. Projeto configurado no GitHub (recomendado)

---

## Passo 1: Preparar o Projeto Localmente

### 1.1 Verificar se tudo está funcionando

```bash
cd veyra
npm install
npm run build
```

Se o build passar sem erros, está tudo pronto!

### 1.2 Criar arquivo .gitignore (se não existir)

Certifique-se que o `.gitignore` contém:

```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

---

## Passo 2: Configurar Supabase

### 2.1 Criar Projeto no Supabase

1. Acesse [https://supabase.com](https://supabase.com)
2. Clique em "New Project"
3. Escolha um nome: `veyra-production`
4. Escolha uma senha forte para o banco
5. Selecione a região mais próxima
6. Aguarde a criação (~2 minutos)

### 2.2 Executar o Schema do Banco

1. No Supabase, vá em **SQL Editor**
2. Copie todo o conteúdo do arquivo `DATABASE_SCHEMA.md`
3. Cole no editor SQL
4. Execute o script
5. Verifique se todas as tabelas foram criadas

### 2.3 Configurar RLS Policies

Execute as policies de RLS conforme documentado no `DATABASE_SCHEMA.md`:

```sql
-- Habilitar RLS em todas as tabelas
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
-- ... continue para todas as tabelas
```

### 2.4 Obter Credenciais

1. No Supabase, vá em **Settings** → **API**
2. Copie:
   - **Project URL** (NEXT_PUBLIC_SUPABASE_URL)
   - **anon public** key (NEXT_PUBLIC_SUPABASE_ANON_KEY)
   - **service_role** key (SUPABASE_SERVICE_ROLE_KEY) - ⚠️ NUNCA exponha essa chave!

---

## Passo 3: Subir para o GitHub

### 3.1 Inicializar Git (se ainda não fez)

```bash
cd veyra
git init
git add .
git commit -m "Initial commit - VEYRA SaaS Platform"
```

### 3.2 Criar Repositório no GitHub

1. Acesse [https://github.com/new](https://github.com/new)
2. Nome do repositório: `veyra`
3. Deixe privado (recomendado)
4. NÃO adicione README, .gitignore ou licença
5. Clique em "Create repository"

### 3.3 Push para o GitHub

```bash
git remote add origin https://github.com/SEU-USUARIO/veyra.git
git branch -M main
git push -u origin main
```

---

## Passo 4: Deploy na Vercel

### 4.1 Conectar Repositório

1. Acesse [https://vercel.com](https://vercel.com)
2. Clique em "Add New..." → "Project"
3. Selecione seu repositório `veyra`
4. Clique em "Import"

### 4.2 Configurar Build Settings

A Vercel detecta automaticamente Next.js, mas confirme:

- **Framework Preset**: Next.js
- **Root Directory**: `./`
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 4.3 Adicionar Variáveis de Ambiente

Na seção **Environment Variables**, adicione:

```
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-anon-key-aqui
SUPABASE_SERVICE_ROLE_KEY=sua-service-role-key-aqui
NEXT_PUBLIC_APP_URL=https://seu-dominio.vercel.app
NEXT_PUBLIC_APP_NAME=VEYRA
```

⚠️ **IMPORTANTE**: 
- Copie os valores do seu projeto Supabase
- Nunca exponha a `SUPABASE_SERVICE_ROLE_KEY` no código cliente

### 4.4 Deploy

1. Clique em "Deploy"
2. Aguarde o build (~2-3 minutos)
3. ✅ Seu site estará no ar!

---

## Passo 5: Configurar Domínio Personalizado (Opcional)

### 5.1 Se você tem um domínio

1. Na Vercel, vá em **Settings** → **Domains**
2. Adicione seu domínio: `veyra.com.br` (exemplo)
3. Configure os DNS conforme instruções da Vercel
4. Aguarde propagação (~24h)

### 5.2 Atualizar variáveis de ambiente

Após configurar domínio, atualize:

```
NEXT_PUBLIC_APP_URL=https://veyra.com.br
```

E faça redeploy.

---

## Passo 6: Configurar Redirects e Rewrites no Supabase

### 6.1 URL de Redirecionamento

No Supabase, vá em **Authentication** → **URL Configuration**

Adicione suas URLs:

- **Site URL**: `https://seu-dominio.vercel.app`
- **Redirect URLs**:
  - `https://seu-dominio.vercel.app/auth/callback`
  - `https://seu-dominio.vercel.app/reset-password`
  - `http://localhost:3000/auth/callback` (para desenvolvimento)
  - `http://localhost:3000/reset-password` (para desenvolvimento)

### 6.2 Configurar Email Templates (Opcional)

Em **Authentication** → **Email Templates**, customize:
- Confirmação de cadastro
- Recuperação de senha
- Mudança de email

---

## Passo 7: Seed de Dados Iniciais

### 7.1 Criar Planos de Exemplo

Execute no SQL Editor do Supabase:

```sql
-- Inserir planos iniciais
INSERT INTO plans (name, slug, description, price, promotional_price, duration_days, features, device_limit, is_active, is_recommended, badge, sort_order)
VALUES 
  (
    'Trial',
    'trial',
    'Acesso completo por 3 dias',
    5.99,
    NULL,
    3,
    '["Acesso completo por 3 dias", "1 dispositivo", "Todos os recursos", "Suporte básico"]'::jsonb,
    1,
    true,
    false,
    NULL,
    1
  ),
  (
    'VEYRA Pro',
    'pro',
    'Acesso mensal completo',
    49.90,
    NULL,
    30,
    '["Acesso completo ilimitado", "3 dispositivos", "Todos os recursos", "Atualizações inclusas", "Suporte prioritário", "Skills personalizadas"]'::jsonb,
    3,
    true,
    true,
    'MAIS POPULAR',
    2
  ),
  (
    'Lifetime',
    'lifetime',
    'Acesso vitalício',
    299.90,
    NULL,
    NULL,
    '["Acesso vitalício", "3 dispositivos", "Todos os recursos", "Todas as atualizações", "Suporte VIP", "Skills personalizadas", "Acesso antecipado a novidades"]'::jsonb,
    3,
    true,
    false,
    'MELHOR VALOR',
    3
  );
```

### 7.2 Criar Skills de Exemplo

```sql
-- Inserir skills de exemplo
INSERT INTO skills (name, description, category, icon, content, is_public, usage_count)
VALUES
  (
    'React Expert',
    'Especialista em desenvolvimento React',
    'development',
    'Code',
    'Você é um especialista em React com foco em componentes funcionais, hooks e boas práticas.',
    true,
    0
  ),
  (
    'UI/UX Designer',
    'Designer de interfaces modernas',
    'ui-ux',
    'Palette',
    'Você é um designer especializado em criar interfaces modernas, acessíveis e responsivas.',
    true,
    0
  ),
  (
    'SEO Specialist',
    'Otimização para mecanismos de busca',
    'seo',
    'Search',
    'Você é um especialista em SEO focado em Next.js, meta tags, performance e acessibilidade.',
    true,
    0
  );
```

---

## Passo 8: Testar em Produção

### 8.1 Checklist de Testes

Acesse `https://seu-dominio.vercel.app` e teste:

- [ ] Landing page carrega corretamente
- [ ] Navbar funciona
- [ ] Seções animam suavemente
- [ ] Footer com links
- [ ] Página de registro
- [ ] Página de login
- [ ] Recuperação de senha
- [ ] Email de confirmação chega
- [ ] Login funciona
- [ ] Dashboard carrega após login
- [ ] Sidebar funciona
- [ ] Navegação entre páginas
- [ ] Logout funciona
- [ ] Responsividade mobile

### 8.2 Verificar Performance

Use essas ferramentas:

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- Lighthouse (DevTools)

Meta: Core Web Vitals no verde ✅

---

## Passo 9: Monitoramento e Analytics

### 9.1 Vercel Analytics (Recomendado)

1. Na Vercel, vá em seu projeto
2. Aba **Analytics**
3. Ative Vercel Analytics
4. Gratuito para até 100k page views/mês

### 9.2 Error Tracking (Opcional)

Configure Sentry:

```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

---

## Passo 10: CI/CD Automático

### 10.1 Deploy Automático

A Vercel já configura CI/CD automático:

- **Push to `main`** → Deploy em produção
- **Pull Request** → Preview deploy automático
- **Branch** → Preview deploy

### 10.2 Proteção de Branch

No GitHub:

1. Settings → Branches
2. Add rule para `main`
3. Exigir aprovação em PRs
4. Exigir status checks

---

## 🔐 Segurança em Produção

### Checklist de Segurança

- [ ] Variáveis sensíveis apenas em environment variables
- [ ] Service role key NUNCA no código cliente
- [ ] RLS policies ativas em todas as tabelas
- [ ] HTTPS forçado (Vercel faz automaticamente)
- [ ] Headers de segurança configurados
- [ ] Rate limiting configurado
- [ ] CORS configurado no Supabase
- [ ] Validação de inputs server-side

### Configurar Headers de Segurança

Crie `vercel.json` na raiz:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

---

## 📊 Monitorar Custos

### Vercel Free Tier

- 100 GB bandwidth/mês
- Builds ilimitados
- Serverless functions: 100 GB-Hours
- Edge middleware: 1 million invocations

Se ultrapassar, upgrade para Pro: $20/mês

### Supabase Free Tier

- 500 MB database
- 1 GB file storage
- 2 GB bandwidth
- 50,000 monthly active users

Se ultrapassar, upgrade para Pro: $25/mês

---

## 🚨 Troubleshooting

### Build Falha

**Erro**: `Module not found`
**Solução**: Verifique imports e paths

**Erro**: `TypeScript errors`
**Solução**: Rode `npm run build` localmente primeiro

### Variáveis de Ambiente Não Funcionam

1. Verifique se começam com `NEXT_PUBLIC_` (para cliente)
2. Faça redeploy após adicionar variáveis
3. Limpe cache: Settings → General → Clear Cache

### Autenticação Não Funciona

1. Verifique redirect URLs no Supabase
2. Confirme que variáveis estão corretas
3. Teste em aba anônima (limpa cookies)

### Supabase Connection Error

1. Verifique se URL e keys estão corretas
2. Confirme que RLS está configurado
3. Teste connection no SQL Editor

---

## 📝 Comandos Úteis

```bash
# Deploy manual pela CLI da Vercel
npm i -g vercel
vercel login
vercel

# Ver logs de produção
vercel logs

# Listar deploys
vercel ls

# Promover preview para produção
vercel promote <deployment-url>

# Rollback para deploy anterior
vercel rollback
```

---

## ✅ Deploy Completo!

Seu projeto VEYRA está no ar! 🎉

**URLs importantes**:
- Site: `https://seu-dominio.vercel.app`
- Dashboard Vercel: `https://vercel.com/seu-usuario/veyra`
- Supabase: `https://app.supabase.com/project/seu-projeto`

---

## 🔄 Próximas Atualizações

Para atualizar o site:

1. Faça alterações localmente
2. Commit e push para GitHub:
   ```bash
   git add .
   git commit -m "Descrição das mudanças"
   git push
   ```
3. Vercel faz deploy automático
4. Acompanhe em tempo real no dashboard

---

## 📞 Suporte

- **Vercel Docs**: https://vercel.com/docs
- **Supabase Docs**: https://supabase.com/docs
- **Next.js Docs**: https://nextjs.org/docs

---

**Criado em**: 08/08/2026
**Versão**: 1.0
