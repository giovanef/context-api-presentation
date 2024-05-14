'use client'

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

import { delay } from "@/helpers/delay";
import { checkoutMock } from "@/mocks";
import { CheckoutInterface } from "@/types";

import { ICheckoutContext, ICheckoutStorageProps } from "./checkoutContext.types";
import { useLoading } from "../loading";

const defaultValues = {
  checkoutData: null,
  setCheckoutData: () => null,
  addCoupon: async () => null,
  removeCoupon: async () => null,
  pay: async () => null
};

export const CheckoutContext = createContext<ICheckoutContext>(defaultValues);

const DELAY = 2000;

export const CheckoutStorage = ({ children }: ICheckoutStorageProps): JSX.Element => {
  const [checkoutData, setCheckoutData] = useState<CheckoutInterface | null>(checkoutMock)

  const router = useRouter();
  const { setIsLoading } = useLoading();

  const doAction = async (message: string, action: () => any) => {
    setIsLoading({ status: true, message });

    await delay(DELAY);
    action();

    setIsLoading({ status: false });
  }

  const addCoupon = async (coupon: string) => {
    doAction('Adicionando cupom...', () => {
      setCheckoutData((prevState => {
        if (!prevState) {
          return null;
        }
  
        return {
          ...prevState,
          coupon: {
            code: coupon,
            value: 10
          }
        }
      }));
    });
  }

  const removeCoupon = async () => {
    doAction('Removendo cupom...', () => {
      setCheckoutData((prevState => {
        if (!prevState) {
          return null;
        }
  
        return {
          ...prevState,
          coupon: null
        }
      }));
    });
  }

  const pay = async () => {
    doAction('Criando pedido...', () => {
      router.push(`/order?orderId=123456789`);
    })
  }

  const contextValue = {
    checkoutData,
    setCheckoutData,
    addCoupon,
    removeCoupon,
    pay,
  };

  return (
    <CheckoutContext.Provider value={contextValue}>
      {children}
    </CheckoutContext.Provider>
  );
}

export const useCheckout = (): ICheckoutContext => {
  return useContext(CheckoutContext);
};
