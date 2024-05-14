import CheckoutContent from '@/components/pages/checkout/CheckoutContent';
import CheckoutSidebar from '@/components/pages/checkout/CheckoutSidebar';
import { CheckoutStorage } from '@/contexts/checkout';

import styles from "./checkout.module.css";

export default function Checkout() {
  return (
    <CheckoutStorage>
      <div className={styles.container}>
        <div className={styles.content}>
          <CheckoutContent />
        </div>

        <div className={styles.sidebar}>
          <CheckoutSidebar />
        </div>
      </div>
    </CheckoutStorage>
  );
}
