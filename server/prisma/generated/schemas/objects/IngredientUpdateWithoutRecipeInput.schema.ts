// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema.js';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema.js';
import { StepIngredientUpdateManyWithoutIngredientRelationNestedInputSchemaObject } from './StepIngredientUpdateManyWithoutIngredientRelationNestedInput.schema.js'

export const IngredientUpdateWithoutRecipeInputSchemaObject = {
    name: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  category: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  season: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  step: Joi.object().keys(StepIngredientUpdateManyWithoutIngredientRelationNestedInputSchemaObject)
}