// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const StepAvgOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  recipeId: SortOrderSchema
}