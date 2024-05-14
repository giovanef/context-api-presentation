export interface CheckoutInterface {
  subtotal: number;
  freight: number;
  total: number;
  status: string;
  payment: PaymentInterface;
  coupon: CouponInterface | null;
  customer: CustomerInterface;
  delivery: DeliveryInterface;
  items: ItemInterface[];
}

export interface PaymentInterface {
  card: CardInterface;
}

export interface CouponInterface {
  code: string;
  value: number;
}

export interface CustomerInterface {
  id: number;
  name: string;
  email: string;
}

export interface CardInterface {
  number: string;
  holder: string;
  expiration: string;
  cvv: string;
}

export interface DeliveryInterface {
  address: string;
  neighborhood: string;
  city: string;
  state: string;
  zipcode: string;
}

export interface ItemInterface {
  id: number;
  name?: string;
  image?: string;
  quantity?: number;
  price?: number;
}
