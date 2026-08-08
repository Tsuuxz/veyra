# 🚀 VEYRA - Quick Start para Deploy na Vercel

## Checklist Rápido (15 minutos)

### ✅ Passo 1: Supabase (5 min)
```bash
1. Acesse https://supabase.com
2. Crie novo projeto "veyra-production"
3. Copie URL e Keys (Settings → API)
4. Execute o schema SQL (veja DATABASE_SCHEMA.md)
```

### ✅ Passo 2: GitHub (2 min)
```bash
cd veyra
git init
git add .
git commit -m "Initial commit - VEYRA"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/veyra.git
git push -u origin main
```

### ✅ Passo 3: Vercel (5 min)
```bash
1. Acesse https://vercel.com
2. Importe repositório do GitHub
3. Adicione Environment Variables:
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   SUPABASE_SERVICE_ROLE_KEY=...
   NEXT_PUBLIC_APP_URL=https://seu-app.vercel.app
   NEXT_PUBLIC_APP_NAME=VEYRA
4. Deploy!
```

### ✅ Passo 4: Configurar Supabase Auth (3 min)
```bash
No Supabase → Authentication → URL Configuration:
- Site URL: https://seu-app.vercel.app
- Redirect URLs:
  • https://seu-app.vercel.app/auth/callback
  • https://seu-app.vercel.app/reset-password
```

## 🎉 Pronto! Seu site está no ar!

Acesse: `https://seu-app.vercel.app`

---

## 📋 Checklist Pós-Deploy

- [ ] Landing page carrega
- [ ] Registrar nova conta funciona
- [ ] Email de confirmação chega
- [ ] Login funciona
- [ ] Dashboard carrega
- [ ] Logout funciona
- [ ] Mobile responsivo

---

## 🐛 Problemas Comuns

### Build falha
```bash
# Teste localmente primeiro
npm install
npm run build
```

### Autenticação não funciona
```bash
# Verifique redirect URLs no Supabase
# Confirme variáveis de ambiente na Vercel
```

### Banco não conecta
```bash
# Verifique URL e keys
# Execute o schema SQL
# Habilite RLS nas tabelas
```

---

## 📚 Documentação Completa

Veja `DEPLOY_VERCEL.md` para guia detalhado.

---

## 🆘 Precisa de Ajuda?

- [Vercel Docs](https://vercel.com/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
