'use client';

import Flex from '@/components/common/Flex';
import { useDebug } from '@/contexts/debug';
import { ItemInterface } from '@/types';

type ProductCardProps = {
  product: ItemInterface;
  onRemove: () => void;
}

const ProductCard = ({ product, onRemove }: ProductCardProps) => {
  const debug = useDebug();

  if (debug) {
    console.log("🚀 ~ ProductCard renderizou")
  }

  return (
    <Flex gap='gapMedium' style={{ borderTop: '1px dashed #999', padding: '8px 0 4px' }}>
      <Flex direction='column' gap='gapSmall' style={{ flex: '1' }}>
        <p>Produto {product.id}</p>
      </Flex>
      
      <div style={{ textAlign: 'right' }}>
        <button onClick={onRemove}>Remover</button>
      </div>
    </Flex>
  );
}
 
export default ProductCard;