// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema.js'

export const RecipeMaxOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  name: SortOrderSchema
}