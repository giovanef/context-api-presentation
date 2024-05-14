'use client'

import Flex from "@/components/common/Flex";
import { useCheckout } from "@/contexts/checkout";
import { useRef } from "react";

const CouponForm = () => {
  const { checkoutData, addCoupon, removeCoupon } = useCheckout();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddCoupon = () => {
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
      <Flex>
        <input type="text" ref={inputRef} style={{ flex: '1' }}></input>
        <button onClick={handleAddCoupon}>Adicionar</button>
      </Flex>

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