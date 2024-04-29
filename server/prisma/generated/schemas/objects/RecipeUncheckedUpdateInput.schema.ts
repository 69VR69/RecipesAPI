// @ts-nocheck
import Joi from 'joi';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { RecipeIngredientUncheckedUpdateManyWithoutReciepRelationNestedInputSchemaObject } from './RecipeIngredientUncheckedUpdateManyWithoutReciepRelationNestedInput.schema';
import { StepUncheckedUpdateManyWithoutRecipeNestedInputSchemaObject } from './StepUncheckedUpdateManyWithoutRecipeNestedInput.schema'

export const RecipeUncheckedUpdateInputSchemaObject = {
    id: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  name: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  ingredient: Joi.object().keys(RecipeIngredientUncheckedUpdateManyWithoutReciepRelationNestedInputSchemaObject),
  step: Joi.object().keys(StepUncheckedUpdateManyWithoutRecipeNestedInputSchemaObject)
}