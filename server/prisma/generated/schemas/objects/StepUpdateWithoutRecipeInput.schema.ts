// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { StepIngredientUpdateManyWithoutStepRelationNestedInputSchemaObject } from './StepIngredientUpdateManyWithoutStepRelationNestedInput.schema'

export const StepUpdateWithoutRecipeInputSchemaObject = {
    description: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  ingredient: Joi.object().keys(StepIngredientUpdateManyWithoutStepRelationNestedInputSchemaObject)
}