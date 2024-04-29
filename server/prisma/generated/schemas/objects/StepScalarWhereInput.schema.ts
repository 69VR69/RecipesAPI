// @ts-nocheck
import Joi from 'joi';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { StringFilterSchemaObject } from './StringFilter.schema'

export const StepScalarWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#StepScalarWhereInput'),
Joi.array().items(Joi.link('#StepScalarWhereInput'))),
  OR: Joi.array().items(Joi.link('#StepScalarWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#StepScalarWhereInput'),
Joi.array().items(Joi.link('#StepScalarWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  description: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  recipeId: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number())
}