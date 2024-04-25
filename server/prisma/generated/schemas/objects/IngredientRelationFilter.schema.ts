// @ts-nocheck
import Joi from 'joi';
import { IngredientWhereInputSchemaObject } from './IngredientWhereInput.schema'

export const IngredientRelationFilterSchemaObject = {
    is: Joi.alternatives().try(Joi.object().keys(IngredientWhereInputSchemaObject)),
  isNot: Joi.alternatives().try(Joi.object().keys(IngredientWhereInputSchemaObject))
}