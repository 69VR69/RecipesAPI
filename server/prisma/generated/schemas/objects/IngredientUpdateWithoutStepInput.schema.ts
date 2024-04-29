// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema.js';
import { RecipeIngredientUpdateManyWithoutIngredientRelationNestedInputSchemaObject } from './RecipeIngredientUpdateManyWithoutIngredientRelationNestedInput.schema.js';
import { SeasonUpdateOneRequiredWithoutIngredientNestedInputSchemaObject } from './SeasonUpdateOneRequiredWithoutIngredientNestedInput.schema.js'

export const IngredientUpdateWithoutStepInputSchemaObject = {
    name: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  category: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  recipe: Joi.object().keys(RecipeIngredientUpdateManyWithoutIngredientRelationNestedInputSchemaObject),
  seasonRelation: Joi.object().keys(SeasonUpdateOneRequiredWithoutIngredientNestedInputSchemaObject)
}