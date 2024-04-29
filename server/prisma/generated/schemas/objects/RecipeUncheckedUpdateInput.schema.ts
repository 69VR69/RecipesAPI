// @ts-nocheck
import Joi from 'joi';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema.js';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema.js';
import { RecipeIngredientUncheckedUpdateManyWithoutReciepRelationNestedInputSchemaObject } from './RecipeIngredientUncheckedUpdateManyWithoutReciepRelationNestedInput.schema.js'

export const RecipeUncheckedUpdateInputSchemaObject = {
    id: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  name: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  ingredient: Joi.object().keys(RecipeIngredientUncheckedUpdateManyWithoutReciepRelationNestedInputSchemaObject)
}