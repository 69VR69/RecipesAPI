// @ts-nocheck
import Joi from 'joi';
import { RecipeIngredientCreateNestedManyWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientCreateNestedManyWithoutIngredientRelationInput.schema'

export const IngredientCreateWithoutStepInputSchemaObject = {
    name: Joi.string().required(),
  category: Joi.string().required(),
  season: Joi.number().required(),
  recipe: Joi.object().keys(RecipeIngredientCreateNestedManyWithoutIngredientRelationInputSchemaObject)
}