export enum UserRole {
  ADMIN = 'admin',
  MANAGER = 'manager',
  MASTER = 'master',
  CLIENT = 'client',
  ACCOUNTANT = 'accountant'
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  created_at: string;
  updated_at: string;
}

export enum OrderStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled'
}

export interface Order {
  id: string;
  order_number: string;
  client_id: string;
  status: OrderStatus;
  total_price: number;
  created_at: string;
  updated_at: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  created_at: string;
  updated_at: string;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}
