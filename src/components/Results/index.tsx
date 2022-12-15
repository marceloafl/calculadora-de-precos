import Button from 'components/Button';
import Fieldset from 'components/Fieldset';
import { useSetRecoilState } from 'recoil';
import { selectedSubCostState } from 'state/atom';
import { CostsList } from 'types/types';
import costList from 'data/inputCosts.json';
import { useEffect } from 'react';

export default function FixedCosts(){

  const selectedType = 'resultados';
  const selectedSubCosts = selectSubCost(costList, selectedType);
  const setSelectedSubCost = useSetRecoilState(selectedSubCostState);

  function selectSubCost(costList: CostsList, selectedType: string){
    const selectedSubCost = costList.find(cost => cost.cost_name === selectedType)?.subcosts;
    return selectedSubCost;
  }
  
  useEffect(() => {
    setSelectedSubCost(selectedSubCosts);
  }, [selectedSubCosts]);

  return(
    <section>
      <article>
        <h2>Resultado</h2>
        <p>Os valores indicados são sugestões calculadas de acordo com os dados que você preencheu nas etapas anteriores.</p>
      </article>
      <form>
        {selectedSubCosts?.map((item) => (
          <Fieldset key={item.subcost_id}  {...item}/>
        ))}
      </form>
      <Button buttonStyle='primary' nextRoute='/'>Novo cálculo</Button>
      <Button buttonStyle='secondary' nextRoute='/taxas'>Voltar</Button>      
    </section>
  );
}