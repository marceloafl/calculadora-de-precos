import articles from 'data/article.json';
import inputCosts from 'data/inputCosts.json';

export type Article = typeof articles[0];

export type CostsList = typeof inputCosts;

export type Cost = typeof inputCosts[0];

export type SubCostList = typeof inputCosts[0]['subcosts'];

export type SubCost = typeof inputCosts[0]['subcosts'][0];

export type InputList = typeof inputCosts[0]['subcosts'][0]['subcost_inputs'];

export type Input = typeof inputCosts[0]['subcosts'][0]['subcost_inputs'][0];