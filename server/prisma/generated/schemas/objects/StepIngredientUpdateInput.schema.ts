// @ts-nocheck
import Joi from 'joi';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema.js';
import { StepUpdateOneRequiredWithoutIngredientNestedInputSchemaObject } from './StepUpdateOneRequiredWithoutIngredientNestedInput.schema.js';
import { IngredientUpdateOneRequiredWithoutStepNestedInputSchemaObject } from './IngredientUpdateOneRequiredWithoutStepNestedInput.schema.js'

export const StepIngredientUpdateInputSchemaObject = {
    number: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  stepRelation: Joi.object().keys(StepUpdateOneRequiredWithoutIngredientNestedInputSchemaObject),
  ingredientRelation: Joi.object().keys(IngredientUpdateOneRequiredWithoutStepNestedInputSchemaObject)
}