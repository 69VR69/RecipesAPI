// @ts-nocheck
import Joi from 'joi';
import { IngredientWhereUniqueInputSchemaObject } from './IngredientWhereUniqueInput.schema.js';
import { IngredientUpdateWithoutSeasonRelationInputSchemaObject } from './IngredientUpdateWithoutSeasonRelationInput.schema.js';
import { IngredientUncheckedUpdateWithoutSeasonRelationInputSchemaObject } from './IngredientUncheckedUpdateWithoutSeasonRelationInput.schema.js';
import { IngredientCreateWithoutSeasonRelationInputSchemaObject } from './IngredientCreateWithoutSeasonRelationInput.schema.js';
import { IngredientUncheckedCreateWithoutSeasonRelationInputSchemaObject } from './IngredientUncheckedCreateWithoutSeasonRelationInput.schema.js'

export const IngredientUpsertWithWhereUniqueWithoutSeasonRelationInputSchemaObject = {
    where: Joi.object().keys(IngredientWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(IngredientUpdateWithoutSeasonRelationInputSchemaObject),
Joi.object().keys(IngredientUncheckedUpdateWithoutSeasonRelationInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(IngredientCreateWithoutSeasonRelationInputSchemaObject),
Joi.object().keys(IngredientUncheckedCreateWithoutSeasonRelationInputSchemaObject))
}