'use client'

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { delay } from "@/helpers/delay";
import { checkoutMock } from "@/mocks";
import { CheckoutInterface, ItemInterface } from "@/types";

import { ICheckoutContext, ICheckoutProviderProps } from "./checkoutContext.types";
import { useLoading } from "../loading";

const defaultValues = {
  checkoutData: null,
  addProduct: async () => null,
  removeProduct: async () => null,
  addCoupon: async () => null,
  removeCoupon: async () => null,
  pay: async () => null
};

export const CheckoutContext = createContext<ICheckoutContext>(defaultValues);

const DELAY = 1500;

export const CheckoutProvider = ({ children }: ICheckoutProviderProps): JSX.Element => {
  const [checkoutData, setCheckoutData] = useState<CheckoutInterface | null>(checkoutMock)

  const router = useRouter();
  const { setIsLoading } = useLoading();

  const doAction = useCallback(async (message: string, action: () => any) => {
    setIsLoading({ status: true, message });

    await delay(DELAY);
    action();

    setIsLoading({ status: false });
  }, [setIsLoading]);

  const addProduct = useCallback(async (productId: number) => {
    doAction('Adicionando produto...', () => {
      setCheckoutData((prevState => {
        if (!prevState) {
          return null;
        }
  
        return {
          ...prevState,
          items: [
            ...prevState.items,
            { id: productId }
          ]
        };
      }));
    });
  }, [doAction]);

  const removeProduct = useCallback(async (productId: number) => {
    doAction('Removendo produto...', () => {
      setCheckoutData((prevState => {
        if (!prevState) {
          return null;
        }

        const newItems = prevState.items.reduce((previousValue: ItemInterface[], item: ItemInterface) => {
          if (item.id === productId) {
            return previousValue;
          }
          
          return [...previousValue, item];
        }, []);
  
        return {
          ...prevState,
          items: newItems
        };
      }));
    });
  }, [doAction]);

  const addCoupon = useCallback(async (coupon: string) => {
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
        };
      }));
    });
  }, [doAction]);

  const removeCoupon = useCallback(async () => {
    doAction('Removendo cupom...', () => {
      setCheckoutData((prevState => {
        if (!prevState) {
          return null;
        }
  
        return {
          ...prevState,
          coupon: null
        };
      }));
    });
  }, [doAction]);

  const pay = useCallback(async () => {
    doAction('Criando pedido...', () => {
      router.push(`/order?orderId=123456789`);
    });
  }, [doAction, router]);

  const contextValue = useMemo(() => ({
    checkoutData,
    addProduct,
    removeProduct,
    addCoupon,
    removeCoupon,
    pay,
  }), [
    addCoupon,
    addProduct,
    checkoutData,
    pay,
    removeCoupon,
    removeProduct,
  ]);

  return (
    <CheckoutContext.Provider value={contextValue}>
      {children}
    </CheckoutContext.Provider>
  );
}

export const useCheckout = (): ICheckoutContext => {
  return useContext(CheckoutContext);
};
