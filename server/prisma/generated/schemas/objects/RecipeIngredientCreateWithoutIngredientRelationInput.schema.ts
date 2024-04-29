// @ts-nocheck
import Joi from 'joi';
import { RecipeCreateNestedOneWithoutIngredientInputSchemaObject } from './RecipeCreateNestedOneWithoutIngredientInput.schema.js'

export const RecipeIngredientCreateWithoutIngredientRelationInputSchemaObject = {
    number: Joi.number().required(),
  reciepRelation: Joi.object().keys(RecipeCreateNestedOneWithoutIngredientInputSchemaObject)
}