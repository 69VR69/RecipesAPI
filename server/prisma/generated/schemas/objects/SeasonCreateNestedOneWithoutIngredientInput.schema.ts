// @ts-nocheck
import Joi from 'joi';
import { SeasonCreateWithoutIngredientInputSchemaObject } from './SeasonCreateWithoutIngredientInput.schema.js';
import { SeasonUncheckedCreateWithoutIngredientInputSchemaObject } from './SeasonUncheckedCreateWithoutIngredientInput.schema.js';
import { SeasonCreateOrConnectWithoutIngredientInputSchemaObject } from './SeasonCreateOrConnectWithoutIngredientInput.schema.js';
import { SeasonWhereUniqueInputSchemaObject } from './SeasonWhereUniqueInput.schema.js'

export const SeasonCreateNestedOneWithoutIngredientInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(SeasonCreateWithoutIngredientInputSchemaObject),
Joi.object().keys(SeasonUncheckedCreateWithoutIngredientInputSchemaObject)),
  connectOrCreate: Joi.object().keys(SeasonCreateOrConnectWithoutIngredientInputSchemaObject),
  connect: Joi.object().keys(SeasonWhereUniqueInputSchemaObject)
}