// @ts-nocheck
import Joi from 'joi';
import { IngredientCreateNestedManyWithoutSeasonRelationInputSchemaObject } from './IngredientCreateNestedManyWithoutSeasonRelationInput.schema.js'

export const SeasonCreateInputSchemaObject = {
    label: Joi.string().required(),
  ingredient: Joi.object().keys(IngredientCreateNestedManyWithoutSeasonRelationInputSchemaObject)
}