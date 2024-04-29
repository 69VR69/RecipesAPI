// @ts-nocheck
import Joi from 'joi';
import { RecipeWhereInputSchemaObject } from './RecipeWhereInput.schema.js.js'

export const RecipeRelationFilterSchemaObject = {
    is: Joi.alternatives().try(Joi.object().keys(RecipeWhereInputSchemaObject)),
  isNot: Joi.alternatives().try(Joi.object().keys(RecipeWhereInputSchemaObject))
}