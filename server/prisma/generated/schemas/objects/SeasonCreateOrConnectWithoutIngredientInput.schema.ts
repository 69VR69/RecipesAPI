// @ts-nocheck
import Joi from 'joi';
import { SeasonWhereUniqueInputSchemaObject } from './SeasonWhereUniqueInput.schema.js';
import { SeasonCreateWithoutIngredientInputSchemaObject } from './SeasonCreateWithoutIngredientInput.schema.js';
import { SeasonUncheckedCreateWithoutIngredientInputSchemaObject } from './SeasonUncheckedCreateWithoutIngredientInput.schema.js'

export const SeasonCreateOrConnectWithoutIngredientInputSchemaObject = {
    where: Joi.object().keys(SeasonWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(SeasonCreateWithoutIngredientInputSchemaObject),
Joi.object().keys(SeasonUncheckedCreateWithoutIngredientInputSchemaObject))
}