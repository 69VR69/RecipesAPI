// @ts-nocheck
import Joi from 'joi';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { StepIngredientUncheckedUpdateManyWithoutIngredientRelationNestedInputSchemaObject } from './StepIngredientUncheckedUpdateManyWithoutIngredientRelationNestedInput.schema'

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