export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  color?: string;
  brand: string;
  category: string;
  images: string[];
};