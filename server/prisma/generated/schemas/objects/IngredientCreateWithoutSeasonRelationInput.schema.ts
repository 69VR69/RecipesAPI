// @ts-nocheck
import Joi from 'joi';
import { RecipeIngredientCreateNestedManyWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientCreateNestedManyWithoutIngredientRelationInput.schema.js';
import { StepIngredientCreateNestedManyWithoutIngredientRelationInputSchemaObject } from './StepIngredientCreateNestedManyWithoutIngredientRelationInput.schema.js'

export const IngredientCreateWithoutSeasonRelationInputSchemaObject = {
    name: Joi.string().required(),
  category: Joi.string().required(),
  recipe: Joi.object().keys(RecipeIngredientCreateNestedManyWithoutIngredientRelationInputSchemaObject),
  step: Joi.object().keys(StepIngredientCreateNestedManyWithoutIngredientRelationInputSchemaObject)
}