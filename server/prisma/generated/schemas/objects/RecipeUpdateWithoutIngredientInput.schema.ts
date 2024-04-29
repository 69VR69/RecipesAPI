// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { StepUpdateManyWithoutRecipeNestedInputSchemaObject } from './StepUpdateManyWithoutRecipeNestedInput.schema'

export const RecipeUpdateWithoutIngredientInputSchemaObject = {
    name: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  step: Joi.object().keys(StepUpdateManyWithoutRecipeNestedInputSchemaObject)
}