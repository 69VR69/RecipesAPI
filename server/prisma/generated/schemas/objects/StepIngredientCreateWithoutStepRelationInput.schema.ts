// @ts-nocheck
import Joi from 'joi';
import { IngredientCreateNestedOneWithoutStepInputSchemaObject } from './IngredientCreateNestedOneWithoutStepInput.schema.js'

export const StepIngredientCreateWithoutStepRelationInputSchemaObject = {
    number: Joi.number().required(),
  ingredientRelation: Joi.object().keys(IngredientCreateNestedOneWithoutStepInputSchemaObject)
}