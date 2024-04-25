// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const RecipeIngredientMinOrderByAggregateInputSchemaObject = {
    ingredient: SortOrderSchema,
  recipe: SortOrderSchema,
  number: SortOrderSchema
}