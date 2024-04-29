// @ts-nocheck
import Joi from 'joi';
import { StepCreateNestedManyWithoutRecipeInputSchemaObject } from './StepCreateNestedManyWithoutRecipeInput.schema'

export const RecipeCreateWithoutIngredientInputSchemaObject = {
    name: Joi.string().required(),
  step: Joi.object().keys(StepCreateNestedManyWithoutRecipeInputSchemaObject)
}