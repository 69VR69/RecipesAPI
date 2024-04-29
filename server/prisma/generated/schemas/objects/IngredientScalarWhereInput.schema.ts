// @ts-nocheck
import Joi from 'joi';
import { IntFilterSchemaObject } from './IntFilter.schema.js';
import { StringFilterSchemaObject } from './StringFilter.schema.js'

export const IngredientScalarWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#IngredientScalarWhereInput'),
Joi.array().items(Joi.link('#IngredientScalarWhereInput'))),
  OR: Joi.array().items(Joi.link('#IngredientScalarWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#IngredientScalarWhereInput'),
Joi.array().items(Joi.link('#IngredientScalarWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  name: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  category: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  season: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number())
}