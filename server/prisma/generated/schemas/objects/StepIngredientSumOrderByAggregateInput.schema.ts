// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const StepIngredientSumOrderByAggregateInputSchemaObject = {
    ingredient: SortOrderSchema,
  step: SortOrderSchema,
  number: SortOrderSchema
}