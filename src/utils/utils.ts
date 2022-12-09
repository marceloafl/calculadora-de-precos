import { InputCostsList } from 'types/types';

export function selectTypeCost(costList: InputCostsList, selectedType: string){
  for (const prop in costList){
    if(prop === selectedType){
      return costList[prop as keyof typeof costList];
    }
  }
}