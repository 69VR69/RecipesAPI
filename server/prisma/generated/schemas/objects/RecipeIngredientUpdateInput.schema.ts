// @ts-nocheck
import Joi from 'joi';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { RecipeUpdateOneRequiredWithoutIngredientNestedInputSchemaObject } from './RecipeUpdateOneRequiredWithoutIngredientNestedInput.schema';
import { IngredientUpdateOneRequiredWithoutRecipeNestedInputSchemaObject } from './IngredientUpdateOneRequiredWithoutRecipeNestedInput.schema'

export const RecipeIngredientUpdateInputSchemaObject = {
    number: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  reciepRelation: Joi.object().keys(RecipeUpdateOneRequiredWithoutIngredientNestedInputSchemaObject),
  ingredientRelation: Joi.object().keys(IngredientUpdateOneRequiredWithoutRecipeNestedInputSchemaObject)
}