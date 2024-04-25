// @ts-nocheck
import Joi from 'joi';
import { RecipeCreateNestedOneWithoutIngredientInputSchemaObject } from './RecipeCreateNestedOneWithoutIngredientInput.schema';
import { IngredientCreateNestedOneWithoutRecipeInputSchemaObject } from './IngredientCreateNestedOneWithoutRecipeInput.schema'

export const RecipeIngredientCreateInputSchemaObject = {
    number: Joi.number().required(),
  reciepRelation: Joi.object().keys(RecipeCreateNestedOneWithoutIngredientInputSchemaObject),
  ingredientRelation: Joi.object().keys(IngredientCreateNestedOneWithoutRecipeInputSchemaObject)
}