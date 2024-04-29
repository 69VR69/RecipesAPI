// @ts-nocheck
import Joi from 'joi';
import { RecipeCreateNestedOneWithoutIngredientInputSchemaObject } from './RecipeCreateNestedOneWithoutIngredientInput.schema.js';
import { IngredientCreateNestedOneWithoutRecipeInputSchemaObject } from './IngredientCreateNestedOneWithoutRecipeInput.schema.js'

export const RecipeIngredientCreateInputSchemaObject = {
    number: Joi.number().required(),
  reciepRelation: Joi.object().keys(RecipeCreateNestedOneWithoutIngredientInputSchemaObject),
  ingredientRelation: Joi.object().keys(IngredientCreateNestedOneWithoutRecipeInputSchemaObject)
}