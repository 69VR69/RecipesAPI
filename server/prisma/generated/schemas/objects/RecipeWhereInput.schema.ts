// @ts-nocheck
import Joi from 'joi';
import { IntFilterSchemaObject } from './IntFilter.schema.js';
import { StringFilterSchemaObject } from './StringFilter.schema.js';
import { RecipeIngredientListRelationFilterSchemaObject } from './RecipeIngredientListRelationFilter.schema.js'

export const RecipeWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#RecipeWhereInput'),
Joi.array().items(Joi.link('#RecipeWhereInput'))),
  OR: Joi.array().items(Joi.link('#RecipeWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#RecipeWhereInput'),
Joi.array().items(Joi.link('#RecipeWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  name: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  ingredient: Joi.object().keys(RecipeIngredientListRelationFilterSchemaObject)
}