export type ProjectTag = 
  | 'Cliente'
  | 'Proyecto'
  | 'Proyecto colaborativo'
  | 'Concepto'
  | 'En desarrollo';

export type ProjectStatus =
  | 'completed'
  | 'in-progress'
  | 'concept'
  | 'collaborative';

export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  areas: string[];
  tag: ProjectTag;
  status: ProjectStatus;
  statusDetail?: string;
  image?: string;
  imageAlt?: string;
  imageFit?: 'cover' | 'contain';
  imageAspect?: 'portrait' | 'square' | 'landscape';
  url?: string;
  urlLabel?: string;
  highlight?: string;
}

export interface Service {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface PricingTier {
  id: string;
  name: string;
  targetAudience: string;
  badge?: string;
  popular?: boolean;
  priceNote: string;
  maintenanceNote: string;
  estimatedTime: string;
  includes: string[];
  excludes: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  whatsapp: string;
  projectType: string;
  estimatedBudget: string;
  needs: string[];
  message: string;
}
