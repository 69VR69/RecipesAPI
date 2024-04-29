// @ts-nocheck
import Joi from 'joi';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema.js';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema.js';
import { StepIngredientUncheckedUpdateManyWithoutIngredientRelationNestedInputSchemaObject } from './StepIngredientUncheckedUpdateManyWithoutIngredientRelationNestedInput.schema.js'

export const IngredientUncheckedUpdateWithoutRecipeInputSchemaObject = {
    id: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  name: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  category: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  season: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  step: Joi.object().keys(StepIngredientUncheckedUpdateManyWithoutIngredientRelationNestedInputSchemaObject)
}