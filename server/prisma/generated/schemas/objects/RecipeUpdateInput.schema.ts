// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { RecipeIngredientUpdateManyWithoutReciepRelationNestedInputSchemaObject } from './RecipeIngredientUpdateManyWithoutReciepRelationNestedInput.schema';
import { StepUpdateManyWithoutRecipeNestedInputSchemaObject } from './StepUpdateManyWithoutRecipeNestedInput.schema'

export const RecipeUpdateInputSchemaObject = {
    name: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  ingredient: Joi.object().keys(RecipeIngredientUpdateManyWithoutReciepRelationNestedInputSchemaObject),
  step: Joi.object().keys(StepUpdateManyWithoutRecipeNestedInputSchemaObject)
}