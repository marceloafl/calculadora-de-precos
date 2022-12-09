import Button from 'components/Button';
import Fieldset from 'components/Fieldset';
import ParcialResult from 'components/ParcialResult';
import costs from 'data/costs.json';
import { selectTypeCost } from 'utils/utils';

export default function UnitVariableCost(){
  
  const selectedCosts = selectTypeCost(costs, 'unitvariableCost');

  return(
    <section>
      <article>
        <h2>Custo Variável Unitário</h2>
        <p>Custo variável é o valor que você gasta com produtos e materiais na produção de uma peça ou na execução do serviço. Esse gasto varia de acordo com a quantidade de produção. Considere itens que estão diretamente ligados à quantidade produzida. Por exemplo, um pintor de parede utiliza mais tinta em paredes grandes do que em áreas pequenas. Outro exemplo é o combustível, que citamos na primeira etapa desta calculadora. No caso de um serviço de entregas, quanto mais serviços são executados, maiores as quantidades e os gastos com esse material.</p>
      </article>
      <form>
        {selectedCosts?.map((item) => (
          <Fieldset key={item.id}  {...item}/>
        ))}
      </form>
      <ParcialResult value={40}>Custo variável unitário:</ParcialResult>
      <Button buttonStyle='primary' nextRoute='/taxas'>Próximo</Button>
      <Button buttonStyle='secondary' nextRoute='/custo-fixo-unitario'>Voltar</Button>
    </section>
  );
}