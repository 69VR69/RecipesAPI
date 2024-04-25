// @ts-nocheck
import Joi from 'joi';
import { RecipeCreateNestedOneWithoutIngredientInputSchemaObject } from './RecipeCreateNestedOneWithoutIngredientInput.schema'

export const RecipeIngredientCreateWithoutIngredientRelationInputSchemaObject = {
    number: Joi.number().required(),
  reciepRelation: Joi.object().keys(RecipeCreateNestedOneWithoutIngredientInputSchemaObject)
}