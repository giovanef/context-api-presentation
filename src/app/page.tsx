import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href={'/checkout'}>Ir para checkout</Link>
    </div>
  );
}