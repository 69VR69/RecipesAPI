// @ts-nocheck
import Joi from 'joi';
import { IngredientCreateNestedOneWithoutRecipeInputSchemaObject } from './IngredientCreateNestedOneWithoutRecipeInput.schema.js.js'

export const RecipeIngredientCreateWithoutReciepRelationInputSchemaObject = {
    number: Joi.number().required(),
  ingredientRelation: Joi.object().keys(IngredientCreateNestedOneWithoutRecipeInputSchemaObject)
}