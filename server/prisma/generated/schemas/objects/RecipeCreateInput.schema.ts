// @ts-nocheck
import Joi from 'joi';
import { RecipeIngredientCreateNestedManyWithoutReciepRelationInputSchemaObject } from './RecipeIngredientCreateNestedManyWithoutReciepRelationInput.schema'

export const RecipeCreateInputSchemaObject = {
    name: Joi.string().required(),
  ingredient: Joi.object().keys(RecipeIngredientCreateNestedManyWithoutReciepRelationInputSchemaObject)
}