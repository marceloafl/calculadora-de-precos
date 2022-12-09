import Button from 'components/Button';
import Fieldset from 'components/Fieldset';
import ParcialResult from 'components/ParcialResult';
import costs from 'data/costs.json';
import { selectTypeCost } from 'utils/utils';

export default function Productivity(){

  const selectedCosts = selectTypeCost(costs, 'productivity');

  return(
    <section>
      <article>
        <h2>Capacidade Produtiva</h2>
        <p>Capacidade produtiva é o máximo que seu negócio consegue produzir em determinado período de tempo com os recursos que tem à disposição.</p>
      </article>
      <form action="">
        {selectedCosts?.map((item) => (
          <Fieldset key={item.id}  {...item} />
        ))}
      </form>
      <ParcialResult  value={20}>Produtividade (em horas):</ParcialResult>
      <Button buttonStyle='primary' nextRoute='/custo-fixo-unitario'>Próximo</Button>
      <Button buttonStyle='secondary' nextRoute='/'>Voltar</Button>
    </section>
  );
}