import Button from 'components/Button';
import Fieldset from 'components/Fieldset';
import ParcialResult from 'components/ParcialResult';
import { useSetRecoilState } from 'recoil';
import { selectedSubCostState } from 'state/atom';
import { CostsList } from 'types/types';
import costList from 'data/inputCosts.json';
import { useEffect } from 'react';

export default function UnitFixedCost(){

  const selectedType = 'custos_fixo_unitario';
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
        <h2>Custo Fixo Unitário</h2>
        <p>Custo fixo unitário é calculado a partir da relação entre o tempo gasto para produzir ou executar determinado serviço e o custo fixo do negócio. É importante conhecê-lo para identificar qual é o custo fixo de produção ou execução de cada serviço.</p>
      </article>
      <form>
        {selectedSubCosts?.map((item) => (
          <Fieldset key={item.subcost_id}  {...item}/>
        ))}
      </form>
      <ParcialResult value={30}>Custo fixo unitário:</ParcialResult>
      <Button buttonStyle='primary' nextRoute='/custo-fixo-variavel'>Próximo</Button>
      <Button buttonStyle='secondary' nextRoute='/produtividade'>Voltar</Button>
    </section>
  );
}