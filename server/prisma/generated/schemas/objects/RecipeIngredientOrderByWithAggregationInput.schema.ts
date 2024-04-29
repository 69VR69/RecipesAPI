// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema.js';
import { RecipeIngredientCountOrderByAggregateInputSchemaObject } from './RecipeIngredientCountOrderByAggregateInput.schema.js';
import { RecipeIngredientAvgOrderByAggregateInputSchemaObject } from './RecipeIngredientAvgOrderByAggregateInput.schema.js';
import { RecipeIngredientMaxOrderByAggregateInputSchemaObject } from './RecipeIngredientMaxOrderByAggregateInput.schema.js';
import { RecipeIngredientMinOrderByAggregateInputSchemaObject } from './RecipeIngredientMinOrderByAggregateInput.schema.js';
import { RecipeIngredientSumOrderByAggregateInputSchemaObject } from './RecipeIngredientSumOrderByAggregateInput.schema.js'

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