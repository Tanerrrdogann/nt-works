// Vehicle types
export interface Vehicle {
  slug: string;
  brand: string;
  model: string;
  version: string;
  title: string;
  year: number;
  price: string;
  km: string;
  fuel: 'Benzin' | 'Dizel' | 'Hibrit' | 'Elektrikli';
  transmission: 'Manual' | 'Otomatik';
  bodyType: 'Sedan' | 'Hatchback' | 'SUV' | 'Coupe' | 'Minivan' | 'Ticari';
  engine: string;
  power: string;
  color: string;
  location: string;
  images: string[];
  tags: string[];
  description: string;
  expertise: {
    report: string;
    paintedParts: string;
    changedParts: string;
    damageRecord: string;
  };
  features: string[];
  featured?: boolean;
}

// Company types
export interface Company {
  name: string;
  slogan: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  location: string;
  hours: string;
  mapLink?: string;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
}

// Contact types
export interface ContactForm {
  name: string;
  phone: string;
  email: string;
  message: string;
  vehicleInterest?: string;
  type?: 'info' | 'testdrive' | 'exchange' | 'sell';
}

// Filter types
export interface FilterOptions {
  brands: string[];
  fuelTypes: string[];
  transmissions: string[];
  bodyTypes: string[];
  priceRanges: Array<{ min: number; max: number; label: string }>;
  yearRanges: Array<{ min: number; max: number; label: string }>;
}

export interface ActiveFilters {
  brand?: string;
  fuel?: string;
  transmission?: string;
  bodyType?: string;
  minPrice?: number;
  maxPrice?: number;
  minYear?: number;
  maxYear?: number;
  sortBy?: 'default' | 'price-asc' | 'price-desc' | 'year-new' | 'km-low' | 'newest';
}

// FAQ types
export interface FAQ {
  question: string;
  answer: string;
}

// Testimonial types
export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating?: number;
  badge?: string;
}

// Category types
export interface Category {
  id: string;
  name: string;
  icon?: string;
  description?: string;
  filter?: ActiveFilters;
}
