// @ts-nocheck
import Joi from 'joi';
import { StepWhereInputSchemaObject } from './StepWhereInput.schema.js'

export const StepListRelationFilterSchemaObject = {
    every: Joi.object().keys(StepWhereInputSchemaObject),
  some: Joi.object().keys(StepWhereInputSchemaObject),
  none: Joi.object().keys(StepWhereInputSchemaObject)
}