// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema.js';
import { RecipeUpdateOneRequiredWithoutStepNestedInputSchemaObject } from './RecipeUpdateOneRequiredWithoutStepNestedInput.schema.js'

export const StepUpdateWithoutIngredientInputSchemaObject = {
    description: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  recipe: Joi.object().keys(RecipeUpdateOneRequiredWithoutStepNestedInputSchemaObject)
}