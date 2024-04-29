// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { RecipeUpdateOneRequiredWithoutStepNestedInputSchemaObject } from './RecipeUpdateOneRequiredWithoutStepNestedInput.schema';
import { StepIngredientUpdateManyWithoutStepRelationNestedInputSchemaObject } from './StepIngredientUpdateManyWithoutStepRelationNestedInput.schema'

export const StepUpdateInputSchemaObject = {
    description: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  recipe: Joi.object().keys(RecipeUpdateOneRequiredWithoutStepNestedInputSchemaObject),
  ingredient: Joi.object().keys(StepIngredientUpdateManyWithoutStepRelationNestedInputSchemaObject)
}