// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { StepIngredientCountOrderByAggregateInputSchemaObject } from './StepIngredientCountOrderByAggregateInput.schema';
import { StepIngredientAvgOrderByAggregateInputSchemaObject } from './StepIngredientAvgOrderByAggregateInput.schema';
import { StepIngredientMaxOrderByAggregateInputSchemaObject } from './StepIngredientMaxOrderByAggregateInput.schema';
import { StepIngredientMinOrderByAggregateInputSchemaObject } from './StepIngredientMinOrderByAggregateInput.schema';
import { StepIngredientSumOrderByAggregateInputSchemaObject } from './StepIngredientSumOrderByAggregateInput.schema'

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