// @ts-nocheck
import Joi from 'joi';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { StepUpdateOneRequiredWithoutIngredientNestedInputSchemaObject } from './StepUpdateOneRequiredWithoutIngredientNestedInput.schema';
import { IngredientUpdateOneRequiredWithoutStepNestedInputSchemaObject } from './IngredientUpdateOneRequiredWithoutStepNestedInput.schema'

export const StepIngredientUpdateInputSchemaObject = {
    number: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  stepRelation: Joi.object().keys(StepUpdateOneRequiredWithoutIngredientNestedInputSchemaObject),
  ingredientRelation: Joi.object().keys(IngredientUpdateOneRequiredWithoutStepNestedInputSchemaObject)
}