// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema.js'

export const StepSumOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  recipeId: SortOrderSchema
}