// @ts-nocheck
import Joi from 'joi';
import { StepCreateNestedManyWithoutRecipeInputSchemaObject } from './StepCreateNestedManyWithoutRecipeInput.schema.js'

export const RecipeCreateWithoutIngredientInputSchemaObject = {
    name: Joi.string().required(),
  step: Joi.object().keys(StepCreateNestedManyWithoutRecipeInputSchemaObject)
}