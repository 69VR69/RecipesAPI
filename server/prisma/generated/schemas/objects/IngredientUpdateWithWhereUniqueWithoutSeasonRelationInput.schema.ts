// @ts-nocheck
import Joi from 'joi';
import { IngredientWhereUniqueInputSchemaObject } from './IngredientWhereUniqueInput.schema.js';
import { IngredientUpdateWithoutSeasonRelationInputSchemaObject } from './IngredientUpdateWithoutSeasonRelationInput.schema.js';
import { IngredientUncheckedUpdateWithoutSeasonRelationInputSchemaObject } from './IngredientUncheckedUpdateWithoutSeasonRelationInput.schema.js'

export const IngredientUpdateWithWhereUniqueWithoutSeasonRelationInputSchemaObject = {
    where: Joi.object().keys(IngredientWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(IngredientUpdateWithoutSeasonRelationInputSchemaObject),
Joi.object().keys(IngredientUncheckedUpdateWithoutSeasonRelationInputSchemaObject))
}