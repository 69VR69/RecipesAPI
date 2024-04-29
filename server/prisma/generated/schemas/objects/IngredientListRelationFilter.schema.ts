// @ts-nocheck
import Joi from 'joi';
import { IngredientWhereInputSchemaObject } from './IngredientWhereInput.schema.js'

export const IngredientListRelationFilterSchemaObject = {
    every: Joi.object().keys(IngredientWhereInputSchemaObject),
  some: Joi.object().keys(IngredientWhereInputSchemaObject),
  none: Joi.object().keys(IngredientWhereInputSchemaObject)
}