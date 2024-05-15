'use client';

import Card from "@/components/common/Card";

import CheckoutItems from './CheckoutItems';
import { useDebug } from "@/contexts/debug";

const CheckoutContent = () => {
  const debug = useDebug();

  if (debug) {
    console.log("🚀 ~ CheckoutContent renderizou")
  }
  
  return (
    <Card title="Produtos">
      <CheckoutItems />
    </Card>
  );
}
 
export default CheckoutContent;