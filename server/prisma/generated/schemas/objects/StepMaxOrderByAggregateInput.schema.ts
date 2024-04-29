// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema.js'

export const StepMaxOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  description: SortOrderSchema,
  recipeId: SortOrderSchema
}