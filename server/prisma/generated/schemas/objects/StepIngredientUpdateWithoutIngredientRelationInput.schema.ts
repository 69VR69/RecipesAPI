// @ts-nocheck
import Joi from 'joi';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { StepUpdateOneRequiredWithoutIngredientNestedInputSchemaObject } from './StepUpdateOneRequiredWithoutIngredientNestedInput.schema'

export const StepIngredientUpdateWithoutIngredientRelationInputSchemaObject = {
    number: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  stepRelation: Joi.object().keys(StepUpdateOneRequiredWithoutIngredientNestedInputSchemaObject)
}