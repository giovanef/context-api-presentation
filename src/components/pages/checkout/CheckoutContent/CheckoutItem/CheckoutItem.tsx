import ProductCard from '@/components/common/ProductCard';
import { useCheckout } from '@/contexts/checkout';
import { useDebug } from '@/contexts/debug';
import { ItemInterface } from '@/types';

type CheckoutItemProps = {
  product: ItemInterface;
}

const CheckoutItem = ({ product }: CheckoutItemProps) => {
  const { removeProduct } = useCheckout();
  const debug = useDebug();

  if (debug) {
    console.log("🚀 ~ CheckoutItem renderizou")
  }

  const handleRemoveProduct = () => {
    removeProduct(product.id);
  }

  return (
    <ProductCard key={product.id} product={product} onRemove={handleRemoveProduct} />
  );
}
 
export default CheckoutItem;