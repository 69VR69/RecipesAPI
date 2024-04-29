// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { StepCountOrderByAggregateInputSchemaObject } from './StepCountOrderByAggregateInput.schema';
import { StepAvgOrderByAggregateInputSchemaObject } from './StepAvgOrderByAggregateInput.schema';
import { StepMaxOrderByAggregateInputSchemaObject } from './StepMaxOrderByAggregateInput.schema';
import { StepMinOrderByAggregateInputSchemaObject } from './StepMinOrderByAggregateInput.schema';
import { StepSumOrderByAggregateInputSchemaObject } from './StepSumOrderByAggregateInput.schema'

export const StepOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  description: SortOrderSchema,
  recipeId: SortOrderSchema,
  _count: Joi.object().keys(StepCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(StepAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(StepMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(StepMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(StepSumOrderByAggregateInputSchemaObject)
}