// @ts-nocheck
import Joi from 'joi';
import { StepIngredientUncheckedCreateNestedManyWithoutStepRelationInputSchemaObject } from './StepIngredientUncheckedCreateNestedManyWithoutStepRelationInput.schema'

export const StepUncheckedCreateWithoutRecipeInputSchemaObject = {
    id: Joi.number(),
  description: Joi.string().required(),
  ingredient: Joi.object().keys(StepIngredientUncheckedCreateNestedManyWithoutStepRelationInputSchemaObject)
}