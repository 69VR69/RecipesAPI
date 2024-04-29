// @ts-nocheck
import Joi from 'joi';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema.js'

export const RecipeIngredientUncheckedUpdateWithoutReciepRelationInputSchemaObject = {
    ingredient: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  number: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject))
}