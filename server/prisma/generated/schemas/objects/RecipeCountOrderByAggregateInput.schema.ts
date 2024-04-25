// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const RecipeCountOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  name: SortOrderSchema
}