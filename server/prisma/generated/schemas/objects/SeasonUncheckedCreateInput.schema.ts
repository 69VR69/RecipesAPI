// @ts-nocheck
import Joi from 'joi';
import { IngredientUncheckedCreateNestedManyWithoutSeasonRelationInputSchemaObject } from './IngredientUncheckedCreateNestedManyWithoutSeasonRelationInput.schema.js'

export const SeasonUncheckedCreateInputSchemaObject = {
    id: Joi.number(),
  label: Joi.string().required(),
  ingredient: Joi.object().keys(IngredientUncheckedCreateNestedManyWithoutSeasonRelationInputSchemaObject)
}