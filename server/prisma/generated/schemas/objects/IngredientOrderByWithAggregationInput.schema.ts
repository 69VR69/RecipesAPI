// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema.js';
import { IngredientCountOrderByAggregateInputSchemaObject } from './IngredientCountOrderByAggregateInput.schema.js';
import { IngredientAvgOrderByAggregateInputSchemaObject } from './IngredientAvgOrderByAggregateInput.schema.js';
import { IngredientMaxOrderByAggregateInputSchemaObject } from './IngredientMaxOrderByAggregateInput.schema.js';
import { IngredientMinOrderByAggregateInputSchemaObject } from './IngredientMinOrderByAggregateInput.schema.js';
import { IngredientSumOrderByAggregateInputSchemaObject } from './IngredientSumOrderByAggregateInput.schema.js'

export const IngredientOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  name: SortOrderSchema,
  category: SortOrderSchema,
  season: SortOrderSchema,
  _count: Joi.object().keys(IngredientCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(IngredientAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(IngredientMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(IngredientMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(IngredientSumOrderByAggregateInputSchemaObject)
}