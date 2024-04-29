// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema.js'

export const RecipeIngredientMinOrderByAggregateInputSchemaObject = {
    ingredient: SortOrderSchema,
  recipe: SortOrderSchema,
  number: SortOrderSchema
}