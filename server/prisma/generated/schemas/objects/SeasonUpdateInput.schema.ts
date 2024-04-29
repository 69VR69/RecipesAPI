// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema.js';
import { IngredientUpdateManyWithoutSeasonRelationNestedInputSchemaObject } from './IngredientUpdateManyWithoutSeasonRelationNestedInput.schema.js'

export const SeasonUpdateInputSchemaObject = {
    label: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  ingredient: Joi.object().keys(IngredientUpdateManyWithoutSeasonRelationNestedInputSchemaObject)
}