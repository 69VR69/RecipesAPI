// @ts-nocheck
import Joi from 'joi';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { IngredientUpdateOneRequiredWithoutRecipeNestedInputSchemaObject } from './IngredientUpdateOneRequiredWithoutRecipeNestedInput.schema'

export const RecipeIngredientUpdateWithoutReciepRelationInputSchemaObject = {
    number: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  ingredientRelation: Joi.object().keys(IngredientUpdateOneRequiredWithoutRecipeNestedInputSchemaObject)
}