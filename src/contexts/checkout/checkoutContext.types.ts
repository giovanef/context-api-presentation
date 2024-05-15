import { CheckoutInterface } from "@/types";

export interface ICheckoutProviderProps {
  children: React.ReactNode;
}

export interface ICheckoutContext {
  // estados
  checkoutData: CheckoutInterface | null;

  // memos
  hasCoupon: boolean;
  subtotal: number;

  // ações
  addProduct: (productId: number) => Promise<any>
  removeProduct: (productId: number) => Promise<any>
  addCoupon: (coupon: string) => Promise<any>
  removeCoupon: () => Promise<any>
  pay: () => Promise<any>
}