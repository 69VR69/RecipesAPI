// @ts-nocheck
import Joi from 'joi';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema.js';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema.js';
import { StepIngredientUncheckedUpdateManyWithoutStepRelationNestedInputSchemaObject } from './StepIngredientUncheckedUpdateManyWithoutStepRelationNestedInput.schema.js'

export const StepUncheckedUpdateInputSchemaObject = {
    id: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  description: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  recipeId: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  ingredient: Joi.object().keys(StepIngredientUncheckedUpdateManyWithoutStepRelationNestedInputSchemaObject)
}