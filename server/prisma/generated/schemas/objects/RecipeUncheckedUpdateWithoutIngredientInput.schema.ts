// @ts-nocheck
import Joi from 'joi';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { StepUncheckedUpdateManyWithoutRecipeNestedInputSchemaObject } from './StepUncheckedUpdateManyWithoutRecipeNestedInput.schema'

export const RecipeUncheckedUpdateWithoutIngredientInputSchemaObject = {
    id: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  name: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  step: Joi.object().keys(StepUncheckedUpdateManyWithoutRecipeNestedInputSchemaObject)
}