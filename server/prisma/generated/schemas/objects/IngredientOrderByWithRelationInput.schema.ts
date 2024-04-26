// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RecipeIngredientOrderByRelationAggregateInputSchemaObject } from './RecipeIngredientOrderByRelationAggregateInput.schema'

export const IngredientOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  name: SortOrderSchema,
  category: SortOrderSchema,
  season: SortOrderSchema,
  recipe: Joi.object().keys(RecipeIngredientOrderByRelationAggregateInputSchemaObject)
}