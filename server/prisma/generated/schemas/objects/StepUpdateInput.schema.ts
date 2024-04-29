// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema.js';
import { RecipeUpdateOneRequiredWithoutStepNestedInputSchemaObject } from './RecipeUpdateOneRequiredWithoutStepNestedInput.schema.js';
import { StepIngredientUpdateManyWithoutStepRelationNestedInputSchemaObject } from './StepIngredientUpdateManyWithoutStepRelationNestedInput.schema.js'

export const StepUpdateInputSchemaObject = {
    description: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  recipe: Joi.object().keys(RecipeUpdateOneRequiredWithoutStepNestedInputSchemaObject),
  ingredient: Joi.object().keys(StepIngredientUpdateManyWithoutStepRelationNestedInputSchemaObject)
}