// @ts-nocheck
import Joi from 'joi';
import { StepCreateNestedOneWithoutIngredientInputSchemaObject } from './StepCreateNestedOneWithoutIngredientInput.schema.js'

export const StepIngredientCreateWithoutIngredientRelationInputSchemaObject = {
    number: Joi.number().required(),
  stepRelation: Joi.object().keys(StepCreateNestedOneWithoutIngredientInputSchemaObject)
}