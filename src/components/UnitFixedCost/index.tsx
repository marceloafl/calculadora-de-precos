import Button from 'components/Button';
import Fieldset from 'components/Fieldset';
import ParcialResult from 'components/ParcialResult';
import costs from 'data/costs.json';
import { selectTypeCost } from 'utils/utils';

export default function UnitFixedCost(){

  const selectedCosts = selectTypeCost(costs, 'unitFixedCost');

  return(
    <section>
      <article>
        <h2>Custo Fixo Unitário</h2>
        <p>Custo fixo unitário é calculado a partir da relação entre o tempo gasto para produzir ou executar determinado serviço e o custo fixo do negócio. É importante conhecê-lo para identificar qual é o custo fixo de produção ou execução de cada serviço.</p>
      </article>
      <form>
        {selectedCosts?.map((item) => (
          <Fieldset key={item.id}  {...item}/>
        ))}
      </form>
      <ParcialResult value={30}>Custo fixo unitário:</ParcialResult>
      <Button buttonStyle='primary' nextRoute='/custo-fixo-variavel'>Próximo</Button>
      <Button buttonStyle='secondary' nextRoute='/produtividade'>Voltar</Button>
    </section>
  );
}