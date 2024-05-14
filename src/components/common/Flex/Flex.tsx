import styles from "./flex.module.css";

type FlexProps = {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  justifyContent?: 'flexStart' | 'spaceBetween';
  gap?: 'noGap' | 'gapSmall' | 'gapMedium' | 'gapLarge';
  style?: React.CSSProperties
}

const Flex = ({ children, direction = 'row', justifyContent = 'flexStart', gap = 'noGap', style }: FlexProps) => {
  const className = `${styles.flex} ${styles[direction]} ${styles[justifyContent]} ${styles[gap]}`;

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
 
export default Flex;