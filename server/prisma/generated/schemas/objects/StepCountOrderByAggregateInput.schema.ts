// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema.js'

export const StepCountOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  description: SortOrderSchema,
  recipeId: SortOrderSchema
}