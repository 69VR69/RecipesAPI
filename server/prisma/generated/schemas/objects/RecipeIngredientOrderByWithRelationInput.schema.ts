// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RecipeOrderByWithRelationInputSchemaObject } from './RecipeOrderByWithRelationInput.schema';
import { IngredientOrderByWithRelationInputSchemaObject } from './IngredientOrderByWithRelationInput.schema'

export const RecipeIngredientOrderByWithRelationInputSchemaObject = {
    ingredient: SortOrderSchema,
  recipe: SortOrderSchema,
  number: SortOrderSchema,
  reciepRelation: Joi.object().keys(RecipeOrderByWithRelationInputSchemaObject),
  ingredientRelation: Joi.object().keys(IngredientOrderByWithRelationInputSchemaObject)
}