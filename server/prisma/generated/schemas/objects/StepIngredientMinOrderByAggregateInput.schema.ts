// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema.js'

export const StepIngredientMinOrderByAggregateInputSchemaObject = {
    ingredient: SortOrderSchema,
  step: SortOrderSchema,
  number: SortOrderSchema
}