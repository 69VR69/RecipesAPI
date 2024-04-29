// @ts-nocheck
import Joi from 'joi';
import { StepCreateNestedOneWithoutIngredientInputSchemaObject } from './StepCreateNestedOneWithoutIngredientInput.schema.js';
import { IngredientCreateNestedOneWithoutStepInputSchemaObject } from './IngredientCreateNestedOneWithoutStepInput.schema.js'

export const StepIngredientCreateInputSchemaObject = {
    number: Joi.number().required(),
  stepRelation: Joi.object().keys(StepCreateNestedOneWithoutIngredientInputSchemaObject),
  ingredientRelation: Joi.object().keys(IngredientCreateNestedOneWithoutStepInputSchemaObject)
}