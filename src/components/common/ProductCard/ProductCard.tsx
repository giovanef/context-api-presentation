import Flex from '@/components/common/Flex';
import { useCheckout } from '@/contexts/checkout';
import { ItemInterface } from '@/types';

type ProductCardProps = {
  product: ItemInterface;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { removeProduct } = useCheckout();

  const handleRemoveProduct = () => {
    removeProduct(product.id);
  }

  return (
    <Flex gap='gapMedium' style={{ borderTop: '1px dashed #999', padding: '8px 0 4px' }}>
      <Flex direction='column' gap='gapSmall' style={{ flex: '1' }}>
        <p>Produto {product.id}</p>
      </Flex>
      
      <div style={{ textAlign: 'right' }}>
        <button onClick={handleRemoveProduct}>Remover</button>
      </div>
    </Flex>
  );
}
 
export default ProductCard;