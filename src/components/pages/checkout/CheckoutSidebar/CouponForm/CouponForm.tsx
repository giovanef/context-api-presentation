'use client'

import { useRef } from "react";

import Flex from "@/components/common/Flex";
import { useCheckout } from "@/contexts/checkout";

const CouponForm = () => {
  const { checkoutData, addCoupon, removeCoupon } = useCheckout();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddCoupon = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputRef?.current?.value) {
      addCoupon(inputRef?.current.value);
      inputRef.current.value = '';
    }
  }

  const handleRemoveCoupon = () => {
    removeCoupon();
  }

  return (
    <>
      <div style={{ marginBottom: '4px' }}>Adicionar cupom</div>
      <form onSubmit={handleAddCoupon}>
        <Flex>
          <input type="text" ref={inputRef} style={{ flex: '1' }}></input>
          <button type="submit">Adicionar</button>
        </Flex>
      </form>

      {!!checkoutData?.coupon && (
        <Flex style={{ marginTop: '8px' }}>
          <div style={{ flex: '1' }}>Cupom {checkoutData.coupon.code}</div>
          <button onClick={handleRemoveCoupon}>Remover</button>
        </Flex>
      )}
    </>
  );
}
 
export default CouponForm;