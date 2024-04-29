// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema.js';
import { StepIngredientUpdateManyWithoutIngredientRelationNestedInputSchemaObject } from './StepIngredientUpdateManyWithoutIngredientRelationNestedInput.schema.js';
import { SeasonUpdateOneRequiredWithoutIngredientNestedInputSchemaObject } from './SeasonUpdateOneRequiredWithoutIngredientNestedInput.schema.js'

export const IngredientUpdateWithoutRecipeInputSchemaObject = {
    name: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  category: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  step: Joi.object().keys(StepIngredientUpdateManyWithoutIngredientRelationNestedInputSchemaObject),
  seasonRelation: Joi.object().keys(SeasonUpdateOneRequiredWithoutIngredientNestedInputSchemaObject)
}