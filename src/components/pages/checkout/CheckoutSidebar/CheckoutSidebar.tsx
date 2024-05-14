'use client'

import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Flex from "@/components/common/Flex";
import { useCheckout } from '@/contexts/checkout';
import { toMonetary } from "@/helpers/money";

import styles from "./checkoutsidebar.module.css";
import ProductForm from "./ProductForm";
import CouponForm from "./CouponForm";

const CheckoutSidebar = () => {
  const { checkoutData, pay } = useCheckout();

  if (!checkoutData) {
    return null;
  }

  return (
    <>
      <Card style={{ marginBottom: '8px' }}>
        <ProductForm />
      </Card>

      <Card style={{ marginBottom: '8px' }}>
        <CouponForm />
      </Card>

      <Card>
        <div style={{ marginBottom: '8px' }}>
          <Flex direction="column" gap="gapMedium">
            <div className={styles.stat}>
              <div>Subtotal</div>
              <div>R$ {toMonetary(checkoutData.subtotal)}</div>
            </div>
            <div className={styles.stat}>
              <div>Frete</div>
              <div>R$ {toMonetary(checkoutData.freight)}</div>
            </div>
            {!!checkoutData.coupon && (
              <div className={styles.stat}>
                <div>Cupom</div>
                <div>- R$ {toMonetary(checkoutData.coupon.value)}</div>
              </div>
            )}
            <div className={styles.stat}>
              <div>Total</div>
              <div style={{ fontSize: '20px', fontWeight: 600 }}>R$ {toMonetary(checkoutData.total - (checkoutData?.coupon?.value || 0))}</div>
            </div>
          </Flex>
        </div>

        <Button label='Comprar' onButtonClick={pay} />
      </Card>
    </>
  );
}
 
export default CheckoutSidebar;