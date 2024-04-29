// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema.js'

export const IngredientCountOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  name: SortOrderSchema,
  category: SortOrderSchema,
  season: SortOrderSchema
}