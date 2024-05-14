import styles from "./card.module.css";

type CardProps = {
  children: React.ReactNode;
  title?: string;
  style?: React.CSSProperties
}

const Card = ({ children, title, style }: CardProps) => {
  return (
    <div className={styles.card} style={style}>
      {!!title && <div className={styles.cardTitle}>{title}</div>}

      {children}
    </div>
  );
}
 
export default Card;