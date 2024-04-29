// @ts-nocheck
import Joi from 'joi';
import { RecipeIngredientUncheckedCreateNestedManyWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientUncheckedCreateNestedManyWithoutIngredientRelationInput.schema.js'

export const IngredientUncheckedCreateWithoutStepInputSchemaObject = {
    id: Joi.number(),
  name: Joi.string().required(),
  category: Joi.string().required(),
  season: Joi.number().required(),
  recipe: Joi.object().keys(RecipeIngredientUncheckedCreateNestedManyWithoutIngredientRelationInputSchemaObject)
}