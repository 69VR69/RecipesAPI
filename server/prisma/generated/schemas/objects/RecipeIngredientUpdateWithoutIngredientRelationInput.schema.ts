// @ts-nocheck
import Joi from 'joi';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema.js';
import { RecipeUpdateOneRequiredWithoutIngredientNestedInputSchemaObject } from './RecipeUpdateOneRequiredWithoutIngredientNestedInput.schema.js'

export const RecipeIngredientUpdateWithoutIngredientRelationInputSchemaObject = {
    number: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  reciepRelation: Joi.object().keys(RecipeUpdateOneRequiredWithoutIngredientNestedInputSchemaObject)
}