// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { RecipeIngredientUpdateManyWithoutReciepRelationNestedInputSchemaObject } from './RecipeIngredientUpdateManyWithoutReciepRelationNestedInput.schema'

export const RecipeUpdateWithoutStepInputSchemaObject = {
    name: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  ingredient: Joi.object().keys(RecipeIngredientUpdateManyWithoutReciepRelationNestedInputSchemaObject)
}