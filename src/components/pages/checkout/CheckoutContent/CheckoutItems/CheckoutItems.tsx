'use client'

import Flex from '@/components/common/Flex';
import ProductCard from '@/components/pages/checkout/CheckoutContent/ProductCard';
import { useCheckout } from '@/contexts/checkout';
import { useDebug } from '@/contexts/debug';

const CheckoutItems = () => {
  const { checkoutData } = useCheckout();
  const debug = useDebug();

  if (debug) {
    console.log("🚀 ~ CheckoutItems renderizou")
  }

  if (!checkoutData) {
    return null;
  }

  return (
    <Flex direction='column' gap='gapMedium'>
      {checkoutData.items.map(product => { 
        return (
          <ProductCard key={product.id} product={product} />
        );
      })}
    </Flex>
  );
}
 
export default CheckoutItems;