// @ts-nocheck
import Joi from 'joi';
import { SeasonCreateWithoutIngredientInputSchemaObject } from './SeasonCreateWithoutIngredientInput.schema.js';
import { SeasonUncheckedCreateWithoutIngredientInputSchemaObject } from './SeasonUncheckedCreateWithoutIngredientInput.schema.js';
import { SeasonCreateOrConnectWithoutIngredientInputSchemaObject } from './SeasonCreateOrConnectWithoutIngredientInput.schema.js';
import { SeasonUpsertWithoutIngredientInputSchemaObject } from './SeasonUpsertWithoutIngredientInput.schema.js';
import { SeasonWhereUniqueInputSchemaObject } from './SeasonWhereUniqueInput.schema.js';
import { SeasonUpdateWithoutIngredientInputSchemaObject } from './SeasonUpdateWithoutIngredientInput.schema.js';
import { SeasonUncheckedUpdateWithoutIngredientInputSchemaObject } from './SeasonUncheckedUpdateWithoutIngredientInput.schema.js'

export const SeasonUpdateOneRequiredWithoutIngredientNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(SeasonCreateWithoutIngredientInputSchemaObject),
Joi.object().keys(SeasonUncheckedCreateWithoutIngredientInputSchemaObject)),
  connectOrCreate: Joi.object().keys(SeasonCreateOrConnectWithoutIngredientInputSchemaObject),
  upsert: Joi.object().keys(SeasonUpsertWithoutIngredientInputSchemaObject),
  connect: Joi.object().keys(SeasonWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(SeasonUpdateWithoutIngredientInputSchemaObject),
Joi.object().keys(SeasonUncheckedUpdateWithoutIngredientInputSchemaObject))
}