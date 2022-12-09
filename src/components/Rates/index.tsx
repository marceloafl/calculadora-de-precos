import { selectTypeCost } from 'utils/utils';
import costs from 'data/costs.json';
import Button from 'components/Button';
import Fieldset from 'components/Fieldset';

export default function Rates(){

  const selectedCosts = selectTypeCost(costs, 'rates');

  return(
    <section>
      <article>
        <h2>Lucros, taxas e impostos</h2>
        <p>Informe a margem de lucro desejada, taxas e impostos.</p>
      </article>
      <form>
        {selectedCosts?.map((item) => (
          <Fieldset key={item.id}  {...item}/>
        ))}
      </form>
      <Button buttonStyle='primary' nextRoute='/resultado'>Próximo</Button>
      <Button buttonStyle='secondary' nextRoute='/custo-fixo-variavel'>Voltar</Button>
    </section>
  );
}