import Button from 'components/Button';
import Fieldset from 'components/Fieldset';
import TotalCostSection from 'components/TotalCostSection';
import costs from 'data/costs.json';

export default function FixedCosts(){

  return(
    <section>
      <article>
        <h3>Custos Fixos</h3>
        <p>Os custos fixos são gastos que fazem parte da estrutura do negócio e que não variam com o aumento ou diminuição da produção.</p>
        <p>Para identificá-los, pense em um cenário de suspensão de produção. Se você for reformar sua empresa, por exemplo, você ainda terá que pagar o aluguel e os salários dos funcionários. Esses gastos geralmente são fixos.</p>
      </article>
      <form>
        {costs.map((item) => (
          <Fieldset key={item.id}  {...item}/>
        ))}
      </form>
      <TotalCostSection name='custo-fixo' label='Custo fixo'/>
      <Button buttonStyle='primary'>Próximo</Button>
    </section>
  );
}