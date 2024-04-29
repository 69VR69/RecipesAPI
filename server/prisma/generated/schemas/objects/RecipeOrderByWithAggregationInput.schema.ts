// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema.js.js';
import { RecipeCountOrderByAggregateInputSchemaObject } from './RecipeCountOrderByAggregateInput.schema.js.js';
import { RecipeAvgOrderByAggregateInputSchemaObject } from './RecipeAvgOrderByAggregateInput.schema.js.js';
import { RecipeMaxOrderByAggregateInputSchemaObject } from './RecipeMaxOrderByAggregateInput.schema.js.js';
import { RecipeMinOrderByAggregateInputSchemaObject } from './RecipeMinOrderByAggregateInput.schema.js.js';
import { RecipeSumOrderByAggregateInputSchemaObject } from './RecipeSumOrderByAggregateInput.schema.js.js'

export const RecipeOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  name: SortOrderSchema,
  _count: Joi.object().keys(RecipeCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(RecipeAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(RecipeMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(RecipeMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(RecipeSumOrderByAggregateInputSchemaObject)
}