// Database Types
export interface Database {
  public: {
    Tables: {
      profiles: Profile;
      plans: Plan;
      subscriptions: Subscription;
      licenses: License;
      license_devices: LicenseDevice;
      projects: Project;
      prompt_history: PromptHistory;
      skills: Skill;
      downloads: Download;
      releases: Release;
      orders: Order;
      payments: Payment;
      support_tickets: SupportTicket;
      ticket_messages: TicketMessage;
      announcements: Announcement;
      audit_logs: AuditLog;
    };
  };
}

// User & Profile
export interface Profile {
  id: string;
  user_id: string;
  name: string;
  email: string;
  avatar_url?: string;
  role: 'USER' | 'ADMIN';
  created_at: string;
  updated_at: string;
}

// Plans & Subscriptions
export interface Plan {
  id: string;
  name: string;
  slug: string;
  description?: string;
  price: number;
  promotional_price?: number;
  duration_days?: number; // null = lifetime
  features: string[];
  device_limit: number;
  is_active: boolean;
  is_recommended: boolean;
  badge?: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface Subscription {
  id: string;
  user_id: string;
  plan_id: string;
  status: 'active' | 'expired' | 'cancelled';
  starts_at: string;
  expires_at?: string;
  created_at: string;
  updated_at: string;
}

// Licenses
export interface License {
  id: string;
  license_key: string;
  user_id: string;
  plan_id: string;
  status: 'inactive' | 'active' | 'expired' | 'suspended' | 'revoked';
  device_limit: number;
  devices_used: number;
  activated_at?: string;
  expires_at?: string;
  last_activity?: string;
  created_at: string;
  updated_at: string;
}

export interface LicenseDevice {
  id: string;
  license_id: string;
  device_name: string;
  browser: string;
  os: string;
  ip_address?: string;
  user_agent?: string;
  first_activation: string;
  last_activity: string;
  status: 'active' | 'disconnected';
  created_at: string;
}

// Projects
export interface Project {
  id: string;
  user_id: string;
  name: string;
  description?: string;
  status: 'active' | 'archived' | 'deleted';
  metadata?: Record<string, any>;
  created_at: string;
  updated_at: string;
  last_activity?: string;
}

// Prompt History
export interface PromptHistory {
  id: string;
  user_id: string;
  project_id?: string;
  prompt: string;
  response?: string;
  status: 'success' | 'failed';
  metadata?: Record<string, any>;
  created_at: string;
}

// Skills
export interface Skill {
  id: string;
  name: string;
  description: string;
  category: 'development' | 'ui-ux' | 'seo' | 'performance' | 'database' | 'debugging' | 'writing' | 'custom';
  icon: string;
  content: string;
  is_public: boolean;
  user_id?: string; // null = system skill
  usage_count: number;
  created_at: string;
  updated_at: string;
}

// Downloads & Releases
export interface Release {
  id: string;
  version: string;
  build: string;
  release_date: string;
  download_url: string;
  file_size: number;
  changelog: string;
  is_required: boolean;
  status: 'draft' | 'beta' | 'stable';
  created_at: string;
  updated_at: string;
}

export interface Download {
  id: string;
  user_id: string;
  release_id: string;
  created_at: string;
}

// Orders & Payments
export interface Order {
  id: string;
  user_id: string;
  plan_id: string;
  amount: number;
  status: 'pending' | 'paid' | 'failed' | 'refunded';
  payment_method?: string;
  metadata?: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface Payment {
  id: string;
  order_id: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  payment_method: string;
  transaction_id?: string;
  gateway: string;
  metadata?: Record<string, any>;
  created_at: string;
}

// Support
export interface SupportTicket {
  id: string;
  user_id: string;
  subject: string;
  status: 'open' | 'waiting' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  category: string;
  created_at: string;
  updated_at: string;
  resolved_at?: string;
}

export interface TicketMessage {
  id: string;
  ticket_id: string;
  user_id: string;
  message: string;
  is_admin: boolean;
  created_at: string;
}

// Announcements
export interface Announcement {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'critical';
  is_active: boolean;
  target: 'all' | 'users' | 'admins';
  starts_at?: string;
  expires_at?: string;
  created_at: string;
  updated_at: string;
}

// Audit Logs
export interface AuditLog {
  id: string;
  user_id?: string;
  action: string;
  entity_type: string;
  entity_id?: string;
  metadata?: Record<string, any>;
  ip_address?: string;
  user_agent?: string;
  created_at: string;
}

// Component Props Types
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

// API Response Types
export interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T = any> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
