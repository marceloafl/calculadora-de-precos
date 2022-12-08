import { Outlet } from 'react-router-dom';
import styles from './CalculatorSection.module.scss';

export default function CalculatorSection(){
  return (
    <section className={styles.calculatorSection}>
      <article>
        <h2>Calculadora de Preços de Venda</h2>
        <p>Esta é uma ferramenta que permite calcular sugestões de preço mínimo para venda de produtos e serviços.  </p>
        <p>Basta digitar os dados relacionados ao custo de produção e os objetivos de lucro.</p>
      </article>
      <Outlet />
    </section>
  );
}