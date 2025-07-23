export type UserRole = 'admin' | 'farmer' | 'wholesaler' | 'consumer';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  locale: 'en' | 'es';
  createdAt: Date;
  updatedAt: Date;
  
  // Role-specific data
  farmerProfile?: FarmerProfile;
  wholesalerProfile?: WholesalerProfile;
  consumerProfile?: ConsumerProfile;
}

export interface FarmerProfile {
  farmName: string;
  location: {
    country: string;
    region: string;
    coordinates?: [number, number];
  };
  certifications: string[];
  farmSize: number; // in hectares
  harvestSeason: {
    start: string; // MM-DD format
    end: string;
  };
  description: string;
  isVerified: boolean;
}

export interface WholesalerProfile {
  companyName: string;
  businessType: 'roaster' | 'distributor' | 'retailer';
  minimumOrderQuantity: number; // in kg
  preferredOrigins: string[];
  paymentTerms: string;
}

export interface ConsumerProfile {
  preferences: {
    roastLevel: 'light' | 'medium' | 'dark';
    origins: string[];
    processingMethods: string[];
  };
  subscriptionTier?: 'basic' | 'premium' | 'connoisseur';
  shippingAddress: Address;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}