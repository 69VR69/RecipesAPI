// @ts-nocheck
import Joi from 'joi';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema.js';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema.js';
import { IngredientUncheckedUpdateManyWithoutSeasonRelationNestedInputSchemaObject } from './IngredientUncheckedUpdateManyWithoutSeasonRelationNestedInput.schema.js'

export const SeasonUncheckedUpdateInputSchemaObject = {
    id: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  label: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  ingredient: Joi.object().keys(IngredientUncheckedUpdateManyWithoutSeasonRelationNestedInputSchemaObject)
}