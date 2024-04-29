// @ts-nocheck
import Joi from 'joi';
import { RecipeIngredientWhereInputSchemaObject } from './RecipeIngredientWhereInput.schema.js.js'

export const RecipeIngredientListRelationFilterSchemaObject = {
    every: Joi.object().keys(RecipeIngredientWhereInputSchemaObject),
  some: Joi.object().keys(RecipeIngredientWhereInputSchemaObject),
  none: Joi.object().keys(RecipeIngredientWhereInputSchemaObject)
}