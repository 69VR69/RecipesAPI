// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RecipeIngredientCountOrderByAggregateInputSchemaObject } from './RecipeIngredientCountOrderByAggregateInput.schema';
import { RecipeIngredientAvgOrderByAggregateInputSchemaObject } from './RecipeIngredientAvgOrderByAggregateInput.schema';
import { RecipeIngredientMaxOrderByAggregateInputSchemaObject } from './RecipeIngredientMaxOrderByAggregateInput.schema';
import { RecipeIngredientMinOrderByAggregateInputSchemaObject } from './RecipeIngredientMinOrderByAggregateInput.schema';
import { RecipeIngredientSumOrderByAggregateInputSchemaObject } from './RecipeIngredientSumOrderByAggregateInput.schema'

export const RecipeIngredientOrderByWithAggregationInputSchemaObject = {
    ingredient: SortOrderSchema,
  recipe: SortOrderSchema,
  number: SortOrderSchema,
  _count: Joi.object().keys(RecipeIngredientCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(RecipeIngredientAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(RecipeIngredientMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(RecipeIngredientMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(RecipeIngredientSumOrderByAggregateInputSchemaObject)
}