import { useRecoilValue } from 'recoil';
import { changedInputNameState } from 'state/atom';
import { selectedInputState } from 'state/selectors';

export default function useUpdateCost(value: string){
  const subCostChanged = useRecoilValue(selectedInputState);
  const inputChangedName = useRecoilValue(changedInputNameState);
  
  const inputChanged = subCostChanged?.subcost_inputs.find(input => input.input_name === inputChangedName);

  const newInput = {...inputChanged};
  if (newInput){
    newInput.input_value = Number(value);
  }

  //Atualizar lista original com o novo valor (newInput.input_value)
}
