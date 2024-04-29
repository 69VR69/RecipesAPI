// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema.js';
import { StepCountOrderByAggregateInputSchemaObject } from './StepCountOrderByAggregateInput.schema.js';
import { StepAvgOrderByAggregateInputSchemaObject } from './StepAvgOrderByAggregateInput.schema.js';
import { StepMaxOrderByAggregateInputSchemaObject } from './StepMaxOrderByAggregateInput.schema.js';
import { StepMinOrderByAggregateInputSchemaObject } from './StepMinOrderByAggregateInput.schema.js';
import { StepSumOrderByAggregateInputSchemaObject } from './StepSumOrderByAggregateInput.schema.js'

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