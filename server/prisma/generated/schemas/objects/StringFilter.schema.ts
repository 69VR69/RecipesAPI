// @ts-nocheck
import Joi from 'joi';
import { NestedStringFilterSchemaObject } from './NestedStringFilter.schema.js'

export const StringFilterSchemaObject = {
    equals: Joi.string(),
  in: Joi.alternatives().try(Joi.array().items(Joi.string()),
Joi.string()),
  notIn: Joi.alternatives().try(Joi.array().items(Joi.string()),
Joi.string()),
  lt: Joi.string(),
  lte: Joi.string(),
  gt: Joi.string(),
  gte: Joi.string(),
  contains: Joi.string(),
  startsWith: Joi.string(),
  endsWith: Joi.string(),
  not: Joi.alternatives().try(Joi.string(),
Joi.object().keys(NestedStringFilterSchemaObject))
}