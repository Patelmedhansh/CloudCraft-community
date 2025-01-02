import { LucideIcon } from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

export type FormStatus = 'idle' | 'sending' | 'success' | 'error';