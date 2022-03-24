export interface WorldPlace {
  _id: string;
  name: string;
  location: string;
  image: string;
  price: string;
  description: string;
  duration: string;
  rating: string;
}

export interface BangladeshPlace {
  _id: string;
  name: string;
  location: string;
  description: string;
  img: string;
  price: string;
}

export interface Vegetable {
  _id: string;
  productName: string;
  price: string;
  productImage: string;
  productDescription: string;
}

export interface Bike {
  _id: string;
  name: string;
  img: string;
  price: string;
  description: string;
}

export interface EProducts {
  _id: string;
  key: string;
  category: string;
  name: string;
  seller: string;
  wholePrice: string;
  priceFraction: string;
  stock: number;
  star: number;
  starCount: number;
  img: string;
  url: string;
  features: Feature[];
  price: number;
  shipping: number;
}

export interface Feature {
  description: string;
  value: string;
}

export interface ProductCart {
  id?: string;
  d?: string;
  c?: string;
  quantity: number;
  price: string;
}

export interface BookedService {
  _id: string;
  name: string;
  email: string;
  date: string;
  address: string;
  phone: string;
  order_id: string;
  user_id: string;
  pack: string;
  d: string;
  c: string;
  status: string;
  payment_status: string;
}

export interface Orders {
  _id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  user_id: string;
  payment_status: string;
  status: string;
  orders: Order[];
  order_id: number;
}

export interface Order {
  id: string;
  d: string;
  c: string;
  quantity: number;
  price: string;
}
