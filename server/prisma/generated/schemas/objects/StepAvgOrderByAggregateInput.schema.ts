// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema.js'

export const StepAvgOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  recipeId: SortOrderSchema
}