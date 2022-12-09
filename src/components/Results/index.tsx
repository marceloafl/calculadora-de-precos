import Button from 'components/Button';
import Fieldset from 'components/Fieldset';
import costs from 'data/costs.json';
import { selectTypeCost } from 'utils/utils';

export default function Results(){

  const selectedCosts = selectTypeCost(costs, 'results');

  return(
    <section>
      <article>
        <h2>Resultado</h2>
        <p>Os valores indicados são sugestões calculadas de acordo com os dados que você preencheu nas etapas anteriores.</p>
      </article>
      <form>
        {selectedCosts?.map((item) => (
          <Fieldset key={item.id}  {...item}/>
        ))}
      </form>
      <Button buttonStyle='primary' nextRoute='/'>Novo cálculo</Button>
      <Button buttonStyle='secondary' nextRoute='/taxas'>Voltar</Button>      
    </section>
  );
}