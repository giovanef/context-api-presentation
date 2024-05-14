'use client'

import Flex from '@/components/common/Flex';
import ProductCard from '@/components/common/ProductCard';
import { useCheckout } from '@/contexts/checkout';

const CheckoutItems = () => {
  const { checkoutData } = useCheckout();

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