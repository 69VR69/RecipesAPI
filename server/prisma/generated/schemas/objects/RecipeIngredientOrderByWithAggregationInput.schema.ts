// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema.js.js';
import { RecipeIngredientCountOrderByAggregateInputSchemaObject } from './RecipeIngredientCountOrderByAggregateInput.schema.js.js';
import { RecipeIngredientAvgOrderByAggregateInputSchemaObject } from './RecipeIngredientAvgOrderByAggregateInput.schema.js.js';
import { RecipeIngredientMaxOrderByAggregateInputSchemaObject } from './RecipeIngredientMaxOrderByAggregateInput.schema.js.js';
import { RecipeIngredientMinOrderByAggregateInputSchemaObject } from './RecipeIngredientMinOrderByAggregateInput.schema.js.js';
import { RecipeIngredientSumOrderByAggregateInputSchemaObject } from './RecipeIngredientSumOrderByAggregateInput.schema.js.js'

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