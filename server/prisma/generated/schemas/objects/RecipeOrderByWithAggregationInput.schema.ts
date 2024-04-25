// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RecipeCountOrderByAggregateInputSchemaObject } from './RecipeCountOrderByAggregateInput.schema';
import { RecipeAvgOrderByAggregateInputSchemaObject } from './RecipeAvgOrderByAggregateInput.schema';
import { RecipeMaxOrderByAggregateInputSchemaObject } from './RecipeMaxOrderByAggregateInput.schema';
import { RecipeMinOrderByAggregateInputSchemaObject } from './RecipeMinOrderByAggregateInput.schema';
import { RecipeSumOrderByAggregateInputSchemaObject } from './RecipeSumOrderByAggregateInput.schema'

export const RecipeOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  name: SortOrderSchema,
  _count: Joi.object().keys(RecipeCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(RecipeAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(RecipeMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(RecipeMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(RecipeSumOrderByAggregateInputSchemaObject)
}