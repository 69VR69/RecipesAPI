// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema.js';
import { RecipeOrderByWithRelationInputSchemaObject } from './RecipeOrderByWithRelationInput.schema.js';
import { IngredientOrderByWithRelationInputSchemaObject } from './IngredientOrderByWithRelationInput.schema.js'

export const RecipeIngredientOrderByWithRelationInputSchemaObject = {
    ingredient: SortOrderSchema,
  recipe: SortOrderSchema,
  number: SortOrderSchema,
  reciepRelation: Joi.object().keys(RecipeOrderByWithRelationInputSchemaObject),
  ingredientRelation: Joi.object().keys(IngredientOrderByWithRelationInputSchemaObject)
}