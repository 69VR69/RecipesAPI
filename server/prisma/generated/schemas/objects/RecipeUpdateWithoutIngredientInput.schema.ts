// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema.js';
import { StepUpdateManyWithoutRecipeNestedInputSchemaObject } from './StepUpdateManyWithoutRecipeNestedInput.schema.js'

export const RecipeUpdateWithoutIngredientInputSchemaObject = {
    name: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  step: Joi.object().keys(StepUpdateManyWithoutRecipeNestedInputSchemaObject)
}