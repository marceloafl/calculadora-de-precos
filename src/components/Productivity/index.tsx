import Button from 'components/Button';
import Fieldset from 'components/Fieldset';
import ParcialResult from 'components/ParcialResult';
import { useSetRecoilState } from 'recoil';
import { selectedSubCostState } from 'state/atom';
import { CostsList } from 'types/types';
import costList from 'data/inputCosts.json';
import { useEffect } from 'react';

export default function Productivity(){

  const selectedType = 'produtividade';
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
        <h2>Capacidade Produtiva</h2>
        <p>Capacidade produtiva é o máximo que seu negócio consegue produzir em determinado período de tempo com os recursos que tem à disposição.</p>
      </article>
      <form action="">
        {selectedSubCosts?.map((item) => (
          <Fieldset key={item.subcost_id}  {...item} />
        ))}
      </form>
      <ParcialResult  value={20}>Produtividade (em horas):</ParcialResult>
      <Button buttonStyle='primary' nextRoute='/custo-fixo-unitario'>Próximo</Button>
      <Button buttonStyle='secondary' nextRoute='/'>Voltar</Button>
    </section>
  );
}