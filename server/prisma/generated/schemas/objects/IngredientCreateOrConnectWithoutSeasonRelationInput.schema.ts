// @ts-nocheck
import Joi from 'joi';
import { IngredientWhereUniqueInputSchemaObject } from './IngredientWhereUniqueInput.schema.js';
import { IngredientCreateWithoutSeasonRelationInputSchemaObject } from './IngredientCreateWithoutSeasonRelationInput.schema.js';
import { IngredientUncheckedCreateWithoutSeasonRelationInputSchemaObject } from './IngredientUncheckedCreateWithoutSeasonRelationInput.schema.js'

export const IngredientCreateOrConnectWithoutSeasonRelationInputSchemaObject = {
    where: Joi.object().keys(IngredientWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(IngredientCreateWithoutSeasonRelationInputSchemaObject),
Joi.object().keys(IngredientUncheckedCreateWithoutSeasonRelationInputSchemaObject))
}