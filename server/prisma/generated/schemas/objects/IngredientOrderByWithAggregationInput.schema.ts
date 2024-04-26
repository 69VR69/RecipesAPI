// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { IngredientCountOrderByAggregateInputSchemaObject } from './IngredientCountOrderByAggregateInput.schema';
import { IngredientAvgOrderByAggregateInputSchemaObject } from './IngredientAvgOrderByAggregateInput.schema';
import { IngredientMaxOrderByAggregateInputSchemaObject } from './IngredientMaxOrderByAggregateInput.schema';
import { IngredientMinOrderByAggregateInputSchemaObject } from './IngredientMinOrderByAggregateInput.schema';
import { IngredientSumOrderByAggregateInputSchemaObject } from './IngredientSumOrderByAggregateInput.schema'

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