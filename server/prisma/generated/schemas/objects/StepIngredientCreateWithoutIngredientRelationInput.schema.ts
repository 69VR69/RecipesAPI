// @ts-nocheck
import Joi from 'joi';
import { StepCreateNestedOneWithoutIngredientInputSchemaObject } from './StepCreateNestedOneWithoutIngredientInput.schema'

export const StepIngredientCreateWithoutIngredientRelationInputSchemaObject = {
    number: Joi.number().required(),
  stepRelation: Joi.object().keys(StepCreateNestedOneWithoutIngredientInputSchemaObject)
}