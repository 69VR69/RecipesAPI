// @ts-nocheck
import Joi from 'joi';
import { StepIngredientUncheckedCreateNestedManyWithoutStepRelationInputSchemaObject } from './StepIngredientUncheckedCreateNestedManyWithoutStepRelationInput.schema'

export const StepUncheckedCreateInputSchemaObject = {
    id: Joi.number(),
  description: Joi.string().required(),
  recipeId: Joi.number().required(),
  ingredient: Joi.object().keys(StepIngredientUncheckedCreateNestedManyWithoutStepRelationInputSchemaObject)
}