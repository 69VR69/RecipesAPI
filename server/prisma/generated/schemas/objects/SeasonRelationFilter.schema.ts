// @ts-nocheck
import Joi from 'joi';
import { SeasonWhereInputSchemaObject } from './SeasonWhereInput.schema.js'

export const SeasonRelationFilterSchemaObject = {
    is: Joi.alternatives().try(Joi.object().keys(SeasonWhereInputSchemaObject)),
  isNot: Joi.alternatives().try(Joi.object().keys(SeasonWhereInputSchemaObject))
}