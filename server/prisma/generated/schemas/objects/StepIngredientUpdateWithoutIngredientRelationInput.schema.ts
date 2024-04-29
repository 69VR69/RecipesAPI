// @ts-nocheck
import Joi from 'joi';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema.js';
import { StepUpdateOneRequiredWithoutIngredientNestedInputSchemaObject } from './StepUpdateOneRequiredWithoutIngredientNestedInput.schema.js'

export const StepIngredientUpdateWithoutIngredientRelationInputSchemaObject = {
    number: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  stepRelation: Joi.object().keys(StepUpdateOneRequiredWithoutIngredientNestedInputSchemaObject)
}