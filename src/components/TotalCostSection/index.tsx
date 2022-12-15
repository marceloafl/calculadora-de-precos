import styles from './TotalCostSection.module.scss';
import Input from 'components/Input';

interface Props{
  name: string,
  label: string,
}

export default function TotalCostSection({name, label}: Props){
  return(
    <section className={styles.totalCostSection}>
      <label htmlFor={name}>{label} total (mês)</label>
      <Input
        type='number'
        name={name}
        id={name}
        placeholder=''
        currency={true}
        disabled={true}
        value={String(8)}
      />
    </section>
  );
}