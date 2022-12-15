import { atom } from 'recoil';
import costs from 'data/inputCosts.json';
import { CostsList, SubCost } from 'types/types';


export const costListState = atom<CostsList>({
  key: 'costListState',
  default: costs
});

export const selectedSubCostState = atom<SubCost[] | undefined>({
  key: 'selectedSubCostState',
  default: []
});

export const changedInputNameState = atom<string>({
  key: 'changedInputNameState',
  default: ''
});

export const inputChangedValue = atom({
  key: 'inputChangedValue',
  default: 0
});

