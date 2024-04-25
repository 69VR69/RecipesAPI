// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RecipeIngredientOrderByRelationAggregateInputSchemaObject } from './RecipeIngredientOrderByRelationAggregateInput.schema'

export const RecipeOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  name: SortOrderSchema,
  ingredient: Joi.object().keys(RecipeIngredientOrderByRelationAggregateInputSchemaObject)
}