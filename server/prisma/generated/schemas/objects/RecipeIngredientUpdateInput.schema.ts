// @ts-nocheck
import Joi from 'joi';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema.js.js';
import { RecipeUpdateOneRequiredWithoutIngredientNestedInputSchemaObject } from './RecipeUpdateOneRequiredWithoutIngredientNestedInput.schema.js.js';
import { IngredientUpdateOneRequiredWithoutRecipeNestedInputSchemaObject } from './IngredientUpdateOneRequiredWithoutRecipeNestedInput.schema.js.js'

export const RecipeIngredientUpdateInputSchemaObject = {
    number: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  reciepRelation: Joi.object().keys(RecipeUpdateOneRequiredWithoutIngredientNestedInputSchemaObject),
  ingredientRelation: Joi.object().keys(IngredientUpdateOneRequiredWithoutRecipeNestedInputSchemaObject)
}