import Button from 'components/Button';
import Fieldset from 'components/Fieldset';
import ParcialResult from 'components/ParcialResult';
import { useSetRecoilState } from 'recoil';
import { selectedSubCostState } from 'state/atom';
import { CostsList } from 'types/types';
import costList from 'data/inputCosts.json';
import { useEffect } from 'react';

export default function FixedCosts(){

  const selectedType = 'custos_fixos';
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
        <h3>Custos Fixos</h3>
        <p>Os custos fixos são gastos que fazem parte da estrutura do negócio e que não variam com o aumento ou diminuição da produção.</p>
        <p>Para identificá-los, pense em um cenário de suspensão de produção. Se você for reformar sua empresa, por exemplo, você ainda terá que pagar o aluguel e os salários dos funcionários. Esses gastos geralmente são fixos.</p>
      </article>
      <form>
        {selectedSubCosts?.map((item) => (
          <Fieldset key={item.subcost_id}  {...item}/>
        ))}
      </form>
      <ParcialResult value={10}>Custo fixo total (mês):</ParcialResult>
      <Button buttonStyle='primary' nextRoute='/produtividade'>Próximo</Button>
    </section>
  );
}