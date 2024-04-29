// @ts-nocheck
import Joi from 'joi';
import { IngredientCreateWithoutSeasonRelationInputSchemaObject } from './IngredientCreateWithoutSeasonRelationInput.schema.js';
import { IngredientUncheckedCreateWithoutSeasonRelationInputSchemaObject } from './IngredientUncheckedCreateWithoutSeasonRelationInput.schema.js';
import { IngredientCreateOrConnectWithoutSeasonRelationInputSchemaObject } from './IngredientCreateOrConnectWithoutSeasonRelationInput.schema.js';
import { IngredientWhereUniqueInputSchemaObject } from './IngredientWhereUniqueInput.schema.js'

export const IngredientUncheckedCreateNestedManyWithoutSeasonRelationInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(IngredientCreateWithoutSeasonRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(IngredientCreateWithoutSeasonRelationInputSchemaObject)),
Joi.object().keys(IngredientUncheckedCreateWithoutSeasonRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(IngredientUncheckedCreateWithoutSeasonRelationInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(IngredientCreateOrConnectWithoutSeasonRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(IngredientCreateOrConnectWithoutSeasonRelationInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(IngredientWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(IngredientWhereUniqueInputSchemaObject)))
}