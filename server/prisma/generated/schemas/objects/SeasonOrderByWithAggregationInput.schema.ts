// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema.js';
import { SeasonCountOrderByAggregateInputSchemaObject } from './SeasonCountOrderByAggregateInput.schema.js';
import { SeasonAvgOrderByAggregateInputSchemaObject } from './SeasonAvgOrderByAggregateInput.schema.js';
import { SeasonMaxOrderByAggregateInputSchemaObject } from './SeasonMaxOrderByAggregateInput.schema.js';
import { SeasonMinOrderByAggregateInputSchemaObject } from './SeasonMinOrderByAggregateInput.schema.js';
import { SeasonSumOrderByAggregateInputSchemaObject } from './SeasonSumOrderByAggregateInput.schema.js'

export const SeasonOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  label: SortOrderSchema,
  _count: Joi.object().keys(SeasonCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(SeasonAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(SeasonMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(SeasonMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(SeasonSumOrderByAggregateInputSchemaObject)
}