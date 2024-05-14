'use client'

import Flex from "@/components/common/Flex";

const ProductForm = () => {
  return (
    <>
      <div style={{ marginBottom: '4px' }}>Adicionar produto</div>
      <Flex>
        <input type="text" style={{ flex: '1' }}></input>
        <button>Adicionar</button>
      </Flex>
    </>
  );
}
 
export default ProductForm;