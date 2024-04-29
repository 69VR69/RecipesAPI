// @ts-nocheck
import Joi from 'joi';
import { StepIngredientWhereInputSchemaObject } from './StepIngredientWhereInput.schema'

export const StepIngredientListRelationFilterSchemaObject = {
    every: Joi.object().keys(StepIngredientWhereInputSchemaObject),
  some: Joi.object().keys(StepIngredientWhereInputSchemaObject),
  none: Joi.object().keys(StepIngredientWhereInputSchemaObject)
}