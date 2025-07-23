export interface Product {
  id: string;
  farmerId: string;
  name: string;
  description: string;
  variety: string;
  processingMethod: 'washed' | 'natural' | 'honey';
  roastLevel: 'green' | 'light' | 'medium' | 'dark';
  origin: {
    country: string;
    region: string;
    altitude: number; // meters above sea level
  };
  certifications: string[];
  flavorNotes: string[];
  images: string[];
  
  // Pricing & availability
  pricePerKg: number;
  availableQuantity: number; // in kg
  minimumOrder: number; // in kg
  harvestDate: Date;
  
  // Status
  status: 'draft' | 'pending_approval' | 'active' | 'out_of_stock' | 'archived';
  isOrganic: boolean;
  cupScore?: number; // 0-100 cupping score
  
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductFilters {
  origins?: string[];
  varieties?: string[];
  processingMethods?: string[];
  certifications?: string[];
  priceRange?: [number, number];
  isOrganic?: boolean;
  minimumCupScore?: number;
}