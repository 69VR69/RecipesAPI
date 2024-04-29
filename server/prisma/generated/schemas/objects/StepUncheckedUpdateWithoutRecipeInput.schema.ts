// @ts-nocheck
import Joi from 'joi';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { StepIngredientUncheckedUpdateManyWithoutStepRelationNestedInputSchemaObject } from './StepIngredientUncheckedUpdateManyWithoutStepRelationNestedInput.schema'

export const StepUncheckedUpdateWithoutRecipeInputSchemaObject = {
    id: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  description: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  ingredient: Joi.object().keys(StepIngredientUncheckedUpdateManyWithoutStepRelationNestedInputSchemaObject)
}