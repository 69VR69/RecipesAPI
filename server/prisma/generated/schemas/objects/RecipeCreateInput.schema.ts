// @ts-nocheck
import Joi from 'joi';
import { RecipeIngredientCreateNestedManyWithoutReciepRelationInputSchemaObject } from './RecipeIngredientCreateNestedManyWithoutReciepRelationInput.schema.js';
import { StepCreateNestedManyWithoutRecipeInputSchemaObject } from './StepCreateNestedManyWithoutRecipeInput.schema.js'

export const RecipeCreateInputSchemaObject = {
    name: Joi.string().required(),
  ingredient: Joi.object().keys(RecipeIngredientCreateNestedManyWithoutReciepRelationInputSchemaObject),
  step: Joi.object().keys(StepCreateNestedManyWithoutRecipeInputSchemaObject)
}