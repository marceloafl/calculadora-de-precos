import articles from 'data/article.json';
import costs from 'data/costs.json';

export type Article = typeof articles[0];

export type InputCosts = typeof costs.fixedCosts[0];

export type InputCostsList = typeof costs;