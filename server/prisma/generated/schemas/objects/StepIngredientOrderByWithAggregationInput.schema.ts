// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema.js';
import { StepIngredientCountOrderByAggregateInputSchemaObject } from './StepIngredientCountOrderByAggregateInput.schema.js';
import { StepIngredientAvgOrderByAggregateInputSchemaObject } from './StepIngredientAvgOrderByAggregateInput.schema.js';
import { StepIngredientMaxOrderByAggregateInputSchemaObject } from './StepIngredientMaxOrderByAggregateInput.schema.js';
import { StepIngredientMinOrderByAggregateInputSchemaObject } from './StepIngredientMinOrderByAggregateInput.schema.js';
import { StepIngredientSumOrderByAggregateInputSchemaObject } from './StepIngredientSumOrderByAggregateInput.schema.js'

export const StepIngredientOrderByWithAggregationInputSchemaObject = {
    ingredient: SortOrderSchema,
  step: SortOrderSchema,
  number: SortOrderSchema,
  _count: Joi.object().keys(StepIngredientCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(StepIngredientAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(StepIngredientMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(StepIngredientMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(StepIngredientSumOrderByAggregateInputSchemaObject)
}