import { selector } from 'recoil';
import { changedInputNameState, selectedSubCostState } from 'state/atom';

export const selectedInputState = selector({
  key: 'selectedInputState',
  get: ({ get }) => {
    const selectedSubCost = get(selectedSubCostState);
    const changedInputName = get(changedInputNameState);

    const cost = selectedSubCost?.find(cost => cost.subcost_inputs.find(input => input.input_name === changedInputName));
    return cost;
  }
});