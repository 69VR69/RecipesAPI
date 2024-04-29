// @ts-nocheck
import Joi from 'joi';
import { StepIngredientCreateNestedManyWithoutStepRelationInputSchemaObject } from './StepIngredientCreateNestedManyWithoutStepRelationInput.schema.js'

export const StepCreateWithoutRecipeInputSchemaObject = {
    description: Joi.string().required(),
  ingredient: Joi.object().keys(StepIngredientCreateNestedManyWithoutStepRelationInputSchemaObject)
}