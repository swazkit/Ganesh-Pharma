export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Product {
  slug: string;
  name: string;
  genericName: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice: number;
  currency: string;
  image: string;
  category: string;
  categorySlug: string;
  dosage: string;
  form: string;
  manufacturer: string;
  inStock: boolean;
  requiresPrescription: boolean;
  rating: number;
  reviewCount: number;
  sideEffects: string[];
  faqs: ProductFAQ[];
  tags: string[];
  sku: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  icon: string;
  productCount: number;
}
