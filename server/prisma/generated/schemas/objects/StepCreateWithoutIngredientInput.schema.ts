// @ts-nocheck
import Joi from 'joi';
import { RecipeCreateNestedOneWithoutStepInputSchemaObject } from './RecipeCreateNestedOneWithoutStepInput.schema'

export const StepCreateWithoutIngredientInputSchemaObject = {
    description: Joi.string().required(),
  recipe: Joi.object().keys(RecipeCreateNestedOneWithoutStepInputSchemaObject)
}