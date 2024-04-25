// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const IngredientSumOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  season: SortOrderSchema
}