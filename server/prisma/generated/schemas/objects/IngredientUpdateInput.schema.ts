// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { RecipeIngredientUpdateManyWithoutIngredientRelationNestedInputSchemaObject } from './RecipeIngredientUpdateManyWithoutIngredientRelationNestedInput.schema';
import { StepIngredientUpdateManyWithoutIngredientRelationNestedInputSchemaObject } from './StepIngredientUpdateManyWithoutIngredientRelationNestedInput.schema'

export const IngredientUpdateInputSchemaObject = {
    name: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  category: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  season: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  recipe: Joi.object().keys(RecipeIngredientUpdateManyWithoutIngredientRelationNestedInputSchemaObject),
  step: Joi.object().keys(StepIngredientUpdateManyWithoutIngredientRelationNestedInputSchemaObject)
}