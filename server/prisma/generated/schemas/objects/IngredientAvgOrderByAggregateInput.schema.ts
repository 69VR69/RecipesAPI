// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema.js'

export const IngredientAvgOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  season: SortOrderSchema
}