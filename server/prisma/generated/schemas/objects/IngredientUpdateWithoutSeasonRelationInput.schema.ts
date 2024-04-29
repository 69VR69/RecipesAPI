// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema.js';
import { RecipeIngredientUpdateManyWithoutIngredientRelationNestedInputSchemaObject } from './RecipeIngredientUpdateManyWithoutIngredientRelationNestedInput.schema.js';
import { StepIngredientUpdateManyWithoutIngredientRelationNestedInputSchemaObject } from './StepIngredientUpdateManyWithoutIngredientRelationNestedInput.schema.js'

export const IngredientUpdateWithoutSeasonRelationInputSchemaObject = {
    name: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  category: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  recipe: Joi.object().keys(RecipeIngredientUpdateManyWithoutIngredientRelationNestedInputSchemaObject),
  step: Joi.object().keys(StepIngredientUpdateManyWithoutIngredientRelationNestedInputSchemaObject)
}