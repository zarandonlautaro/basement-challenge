export interface Product {
  id: number;
  title: string;
  image: string;
  price: string;
}

export interface CartItem extends Product {
  quantity: number;
}
