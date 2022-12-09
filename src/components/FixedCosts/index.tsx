import Button from 'components/Button';
import Fieldset from 'components/Fieldset';
import ParcialResult from 'components/ParcialResult';
import costs from 'data/costs.json';
import { selectTypeCost } from 'utils/utils';

export default function FixedCosts(){

  const selectedCosts = selectTypeCost(costs, 'fixedCosts');
  
  return(
    <section>
      <article>
        <h3>Custos Fixos</h3>
        <p>Os custos fixos são gastos que fazem parte da estrutura do negócio e que não variam com o aumento ou diminuição da produção.</p>
        <p>Para identificá-los, pense em um cenário de suspensão de produção. Se você for reformar sua empresa, por exemplo, você ainda terá que pagar o aluguel e os salários dos funcionários. Esses gastos geralmente são fixos.</p>
      </article>
      <form>
        {selectedCosts?.map((item) => (
          <Fieldset key={item.id}  {...item}/>
        ))}
      </form>
      <ParcialResult value={10}>Custo fixo total (mês):</ParcialResult>
      <Button buttonStyle='primary' nextRoute='/produtividade'>Próximo</Button>
    </section>
  );
}