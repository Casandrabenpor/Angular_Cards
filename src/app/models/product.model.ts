export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}
export interface ProductCategory {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}
