import { CheckoutInterface } from "@/types";

export interface ICheckoutStorageProps {
  children: React.ReactNode;
}

export interface ICheckoutContext {
  // estados do contexto
  checkoutData: CheckoutInterface | null;
  setCheckoutData: React.Dispatch<React.SetStateAction<CheckoutInterface | null>>;

  // ações do contexto
  addCoupon: (coupon: string) => Promise<any>
  removeCoupon: () => Promise<any>
  pay: () => Promise<any>
}