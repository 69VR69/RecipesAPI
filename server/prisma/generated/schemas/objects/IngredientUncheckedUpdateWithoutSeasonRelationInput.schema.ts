// @ts-nocheck
import Joi from 'joi';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema.js';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema.js';
import { RecipeIngredientUncheckedUpdateManyWithoutIngredientRelationNestedInputSchemaObject } from './RecipeIngredientUncheckedUpdateManyWithoutIngredientRelationNestedInput.schema.js';
import { StepIngredientUncheckedUpdateManyWithoutIngredientRelationNestedInputSchemaObject } from './StepIngredientUncheckedUpdateManyWithoutIngredientRelationNestedInput.schema.js'

export const IngredientUncheckedUpdateWithoutSeasonRelationInputSchemaObject = {
    id: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  name: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  category: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  recipe: Joi.object().keys(RecipeIngredientUncheckedUpdateManyWithoutIngredientRelationNestedInputSchemaObject),
  step: Joi.object().keys(StepIngredientUncheckedUpdateManyWithoutIngredientRelationNestedInputSchemaObject)
}