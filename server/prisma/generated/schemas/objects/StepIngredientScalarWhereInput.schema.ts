// @ts-nocheck
import Joi from 'joi';
import { IntFilterSchemaObject } from './IntFilter.schema.js'

export const StepIngredientScalarWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#StepIngredientScalarWhereInput'),
Joi.array().items(Joi.link('#StepIngredientScalarWhereInput'))),
  OR: Joi.array().items(Joi.link('#StepIngredientScalarWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#StepIngredientScalarWhereInput'),
Joi.array().items(Joi.link('#StepIngredientScalarWhereInput'))),
  ingredient: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  step: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  number: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number())
}