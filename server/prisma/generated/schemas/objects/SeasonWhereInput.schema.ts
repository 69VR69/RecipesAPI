// @ts-nocheck
import Joi from 'joi';
import { IntFilterSchemaObject } from './IntFilter.schema.js';
import { StringFilterSchemaObject } from './StringFilter.schema.js';
import { IngredientListRelationFilterSchemaObject } from './IngredientListRelationFilter.schema.js'

export const SeasonWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#SeasonWhereInput'),
Joi.array().items(Joi.link('#SeasonWhereInput'))),
  OR: Joi.array().items(Joi.link('#SeasonWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#SeasonWhereInput'),
Joi.array().items(Joi.link('#SeasonWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  label: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  ingredient: Joi.object().keys(IngredientListRelationFilterSchemaObject)
}