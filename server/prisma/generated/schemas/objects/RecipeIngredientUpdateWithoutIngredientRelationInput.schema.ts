// @ts-nocheck
import Joi from 'joi';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { RecipeUpdateOneRequiredWithoutIngredientNestedInputSchemaObject } from './RecipeUpdateOneRequiredWithoutIngredientNestedInput.schema'

export const RecipeIngredientUpdateWithoutIngredientRelationInputSchemaObject = {
    number: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  reciepRelation: Joi.object().keys(RecipeUpdateOneRequiredWithoutIngredientNestedInputSchemaObject)
}