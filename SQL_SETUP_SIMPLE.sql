-- ============================================
-- VEYRA - Database Setup (Versão Simplificada)
-- Execute LINHA POR LINHA ou por seção
-- ============================================

-- ============================================
-- PASSO 1: CRIAR TABELAS PRINCIPAIS
-- ============================================

-- Profiles
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT DEFAULT 'User',
  email TEXT UNIQUE,
  avatar_url TEXT,
  role TEXT NOT NULL DEFAULT 'USER',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Plans
CREATE TABLE IF NOT EXISTS public.plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  promotional_price DECIMAL(10,2),
  duration_days INTEGER,
  features JSONB DEFAULT '[]',
  device_limit INTEGER DEFAULT 1,
  is_active BOOLEAN DEFAULT true,
  is_recommended BOOLEAN DEFAULT false,
  badge TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Subscriptions
CREATE TABLE IF NOT EXISTS public.subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  plan_id UUID REFERENCES public.plans(id) ON DELETE RESTRICT,
  status TEXT DEFAULT 'active',
  starts_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Licenses
CREATE TABLE IF NOT EXISTS public.licenses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  license_key TEXT NOT NULL UNIQUE,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  plan_id UUID REFERENCES public.plans(id) ON DELETE RESTRICT,
  status TEXT DEFAULT 'inactive',
  device_limit INTEGER NOT NULL,
  devices_used INTEGER DEFAULT 0,
  activated_at TIMESTAMPTZ,
  expires_at TIMESTAMPTZ,
  last_activity TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- License Devices
CREATE TABLE IF NOT EXISTS public.license_devices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  license_id UUID REFERENCES public.licenses(id) ON DELETE CASCADE,
  device_name TEXT NOT NULL,
  browser TEXT NOT NULL,
  os TEXT NOT NULL,
  ip_address TEXT,
  user_agent TEXT,
  first_activation TIMESTAMPTZ DEFAULT NOW(),
  last_activity TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Projects
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'active',
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  last_activity TIMESTAMPTZ
);

-- Skills
CREATE TABLE IF NOT EXISTS public.skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  icon TEXT NOT NULL,
  content TEXT NOT NULL,
  is_public BOOLEAN DEFAULT true,
  user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  usage_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Releases
CREATE TABLE IF NOT EXISTS public.releases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  version TEXT NOT NULL UNIQUE,
  build TEXT NOT NULL,
  release_date DATE NOT NULL,
  download_url TEXT NOT NULL,
  file_size BIGINT NOT NULL,
  changelog TEXT NOT NULL,
  is_required BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'stable',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- PASSO 2: ATIVAR ROW LEVEL SECURITY
-- ============================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.licenses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.license_devices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.releases ENABLE ROW LEVEL SECURITY;

-- ============================================
-- PASSO 3: CRIAR POLÍTICAS RLS
-- ============================================

-- Profiles
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- Plans (públicos)
DROP POLICY IF EXISTS "Everyone can view active plans" ON public.plans;
CREATE POLICY "Everyone can view active plans"
  ON public.plans FOR SELECT
  USING (is_active = true);

-- Licenses
DROP POLICY IF EXISTS "Users can view own licenses" ON public.licenses;
CREATE POLICY "Users can view own licenses"
  ON public.licenses FOR SELECT
  USING (user_id = auth.uid());

-- Projects
DROP POLICY IF EXISTS "Users can view own projects" ON public.projects;
CREATE POLICY "Users can view own projects"
  ON public.projects FOR SELECT
  USING (user_id = auth.uid());

DROP POLICY IF EXISTS "Users can insert own projects" ON public.projects;
CREATE POLICY "Users can insert own projects"
  ON public.projects FOR INSERT
  WITH CHECK (user_id = auth.uid());

DROP POLICY IF EXISTS "Users can update own projects" ON public.projects;
CREATE POLICY "Users can update own projects"
  ON public.projects FOR UPDATE
  USING (user_id = auth.uid());

-- Skills
DROP POLICY IF EXISTS "Everyone can view public skills" ON public.skills;
CREATE POLICY "Everyone can view public skills"
  ON public.skills FOR SELECT
  USING (is_public = true OR user_id = auth.uid());

-- Releases (públicos)
DROP POLICY IF EXISTS "Everyone can view releases" ON public.releases;
CREATE POLICY "Everyone can view releases"
  ON public.releases FOR SELECT
  USING (true);

-- ============================================
-- PASSO 4: CRIAR FUNÇÃO DE SINCRONIZAÇÃO
-- ============================================

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'name', 'User')
  );
  RETURN NEW;
EXCEPTION
  WHEN OTHERS THEN
    -- Ignora erros para não quebrar o cadastro
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- PASSO 5: CRIAR TRIGGER
-- ============================================

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- ============================================
-- PASSO 6: INSERIR DADOS INICIAIS
-- ============================================

-- Planos
INSERT INTO public.plans (name, slug, description, price, duration_days, features, device_limit, is_active, is_recommended, badge, sort_order)
VALUES 
  ('Trial', 'trial', 'Acesso completo por 3 dias', 5.99, 3, 
   '["Acesso completo por 3 dias", "1 dispositivo", "Todos os recursos", "Suporte básico"]'::jsonb, 
   1, true, false, NULL, 1),
  
  ('VEYRA Pro', 'pro', 'Acesso mensal completo', 49.90, 30, 
   '["Acesso completo ilimitado", "3 dispositivos", "Todos os recursos", "Atualizações inclusas", "Suporte prioritário", "Skills personalizadas"]'::jsonb, 
   3, true, true, 'MAIS POPULAR', 2),
  
  ('Lifetime', 'lifetime', 'Acesso vitalício', 299.90, NULL, 
   '["Acesso vitalício", "3 dispositivos", "Todos os recursos", "Todas as atualizações", "Suporte VIP", "Skills personalizadas", "Acesso antecipado a novidades"]'::jsonb, 
   3, true, false, 'MELHOR VALOR', 3)
ON CONFLICT (slug) DO NOTHING;

-- Skills
INSERT INTO public.skills (name, description, category, icon, content, is_public)
VALUES
  ('React Expert', 'Especialista em desenvolvimento React', 'development', 'Code', 
   'Você é um especialista em React com foco em componentes funcionais, hooks e boas práticas.', true),
  
  ('UI/UX Designer', 'Designer de interfaces modernas', 'ui-ux', 'Palette', 
   'Você é um designer especializado em criar interfaces modernas, acessíveis e responsivas.', true),
  
  ('SEO Specialist', 'Otimização para mecanismos de busca', 'seo', 'Search', 
   'Você é um especialista em SEO focado em Next.js, meta tags, performance e acessibilidade.', true)
ON CONFLICT DO NOTHING;

-- ============================================
-- ✅ CONCLUÍDO!
-- ============================================

-- Verificar tabelas criadas
SELECT 
  schemaname, 
  tablename 
FROM pg_tables 
WHERE schemaname = 'public' 
ORDER BY tablename;
