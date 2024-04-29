// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema.js.js';
import { IngredientCountOrderByAggregateInputSchemaObject } from './IngredientCountOrderByAggregateInput.schema.js.js';
import { IngredientAvgOrderByAggregateInputSchemaObject } from './IngredientAvgOrderByAggregateInput.schema.js.js';
import { IngredientMaxOrderByAggregateInputSchemaObject } from './IngredientMaxOrderByAggregateInput.schema.js.js';
import { IngredientMinOrderByAggregateInputSchemaObject } from './IngredientMinOrderByAggregateInput.schema.js.js';
import { IngredientSumOrderByAggregateInputSchemaObject } from './IngredientSumOrderByAggregateInput.schema.js.js'

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