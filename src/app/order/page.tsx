'use client'

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

import styles from "./order.module.css";

const OrderInfo = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId')

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Seu pedido de número #{orderId} foi realizado!</h1>
        <p>Em breve você rebecerá em seu e-mail as atualizações.</p>
      </div>
    </div>
  );
}

export default function Order() {
  return (
    <Suspense>
      <OrderInfo />
    </Suspense>
  );
}
