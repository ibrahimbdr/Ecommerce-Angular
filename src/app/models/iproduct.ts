export interface IProduct {
  id: string;
  title: string;
  price: number;
  quantity: number;
  description?: string;
  category: string;
  image: string;
  rating?: {
    rate?: number;
    count?: number;
  }
  seller: string;
}
