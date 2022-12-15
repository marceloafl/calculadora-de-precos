import { CostsList } from 'types/types';

export default function useSelectSubCost(costList: CostsList, selectedType: string){
  for (const prop in costList){
    if (prop === selectedType){
      return costList[prop as keyof typeof costList];
    }
  }
}