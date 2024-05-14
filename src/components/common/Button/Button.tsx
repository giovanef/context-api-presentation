'use client'

import styles from "./button.module.css";

type ButtonProps = {
  label: string;
  onButtonClick?: () => void
}

const Button = ({ label, onButtonClick }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onButtonClick}>
      {label}
    </button>
  );
}
 
export default Button;