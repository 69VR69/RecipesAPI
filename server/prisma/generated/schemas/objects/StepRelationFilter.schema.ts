// @ts-nocheck
import Joi from 'joi';
import { StepWhereInputSchemaObject } from './StepWhereInput.schema.js'

export const StepRelationFilterSchemaObject = {
    is: Joi.alternatives().try(Joi.object().keys(StepWhereInputSchemaObject)),
  isNot: Joi.alternatives().try(Joi.object().keys(StepWhereInputSchemaObject))
}