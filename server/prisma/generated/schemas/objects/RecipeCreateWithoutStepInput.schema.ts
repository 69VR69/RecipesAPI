// @ts-nocheck
import Joi from 'joi';
import { RecipeIngredientCreateNestedManyWithoutReciepRelationInputSchemaObject } from './RecipeIngredientCreateNestedManyWithoutReciepRelationInput.schema.js'

export const RecipeCreateWithoutStepInputSchemaObject = {
    name: Joi.string().required(),
  ingredient: Joi.object().keys(RecipeIngredientCreateNestedManyWithoutReciepRelationInputSchemaObject)
}