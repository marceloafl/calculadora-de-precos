import styles from './ParcialResult.module.scss';

interface Props{
  children: React.ReactNode,
  value: number
}

export default function ParcialResult({children, value}: Props){
  return (
    <section className={styles.parcialResultSection}>
      <p>{children}</p>
      <p>{value}</p>
    </section>
  );
}