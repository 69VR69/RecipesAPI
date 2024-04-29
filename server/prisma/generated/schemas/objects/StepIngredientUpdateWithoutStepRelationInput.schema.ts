// @ts-nocheck
import Joi from 'joi';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema.js';
import { IngredientUpdateOneRequiredWithoutStepNestedInputSchemaObject } from './IngredientUpdateOneRequiredWithoutStepNestedInput.schema.js'

export const StepIngredientUpdateWithoutStepRelationInputSchemaObject = {
    number: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  ingredientRelation: Joi.object().keys(IngredientUpdateOneRequiredWithoutStepNestedInputSchemaObject)
}