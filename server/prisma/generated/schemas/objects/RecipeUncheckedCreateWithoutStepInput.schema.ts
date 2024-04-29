// @ts-nocheck
import Joi from 'joi';
import { RecipeIngredientUncheckedCreateNestedManyWithoutReciepRelationInputSchemaObject } from './RecipeIngredientUncheckedCreateNestedManyWithoutReciepRelationInput.schema.js'

export const RecipeUncheckedCreateWithoutStepInputSchemaObject = {
    id: Joi.number(),
  name: Joi.string().required(),
  ingredient: Joi.object().keys(RecipeIngredientUncheckedCreateNestedManyWithoutReciepRelationInputSchemaObject)
}