'use client'

import { useRef } from "react";

import Flex from "@/components/common/Flex";
import { useCheckout } from "@/contexts/checkout";

const ProductForm = () => {
  const { addProduct } = useCheckout();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputRef?.current?.value) {
      addProduct(Number(inputRef?.current.value));
      inputRef.current.value = '';
    }
  }

  return (
    <>
      <div style={{ marginBottom: '4px' }}>Adicionar produto</div>
      <form onSubmit={handleAddProduct}>
        <Flex>
          <input type="number" ref={inputRef} style={{ flex: '1' }}></input>
          <button type="submit">Adicionar</button>
        </Flex>
      </form>
    </>
  );
}
 
export default ProductForm;