import { Category } from './CategoryDTO';

export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  creationAt: string; // ISO date string
  updatedAt: string; // ISO date string
}
