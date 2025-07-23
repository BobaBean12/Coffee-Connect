export const COFFEE_VARIETIES = [
  'Arabica Bourbon',
  'Arabica Typica',
  'Caturra',
  'Catuai',
  'Geisha',
  'Pacamara',
  'Villa Sarchi',
  'SL28',
  'SL34',
] as const;

export const PROCESSING_METHODS = [
  'washed',
  'natural',
  'honey',
] as const;

export const CERTIFICATIONS = [
  'Organic',
  'Fair Trade',
  'Rainforest Alliance',
  'UTZ',
  'Bird Friendly',
  'Direct Trade',
] as const;

export const LATIN_AMERICAN_COUNTRIES = [
  'Brazil',
  'Colombia',
  'Peru',
  'Ecuador',
  'Bolivia',
  'Guatemala',
  'Honduras',
  'El Salvador',
  'Nicaragua',
  'Costa Rica',
  'Panama',
  'Mexico',
] as const;

export const USER_ROLES = {
  ADMIN: 'admin',
  FARMER: 'farmer',
  WHOLESALER: 'wholesaler',
  CONSUMER: 'consumer',
} as const;

export const SUBSCRIPTION_TIERS = {
  BASIC: { name: 'Basic', price: 25, coffeeAmount: 250 }, // 250g
  PREMIUM: { name: 'Premium', price: 45, coffeeAmount: 500 }, // 500g
  CONNOISSEUR: { name: 'Connoisseur', price: 85, coffeeAmount: 1000 }, // 1kg
} as const;