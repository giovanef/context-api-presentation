'use client'

import Link from "next/link";

import { useLoading } from "@/contexts/loading";
import Flex from "@/components/common/Flex";

import styles from "./page.module.css";

export default function Home() {
  const { setIsLoading } = useLoading();

  const handleShowLoading = () => {
    setIsLoading({
      status: true,
      message: 'Tá carregando...'
    })
  }

  return (
    <div className={styles.container}>
      <Flex direction="column" gap="gapMedium">
        <Link href={'/checkout'}>Ir para checkout</Link>

        <button onClick={handleShowLoading}>Mostrar loading</button>
      </Flex>
    </div>
  );
}
