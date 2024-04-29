// @ts-nocheck
import Joi from 'joi';
import { SeasonUpdateWithoutIngredientInputSchemaObject } from './SeasonUpdateWithoutIngredientInput.schema.js';
import { SeasonUncheckedUpdateWithoutIngredientInputSchemaObject } from './SeasonUncheckedUpdateWithoutIngredientInput.schema.js';
import { SeasonCreateWithoutIngredientInputSchemaObject } from './SeasonCreateWithoutIngredientInput.schema.js';
import { SeasonUncheckedCreateWithoutIngredientInputSchemaObject } from './SeasonUncheckedCreateWithoutIngredientInput.schema.js'

export const SeasonUpsertWithoutIngredientInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(SeasonUpdateWithoutIngredientInputSchemaObject),
Joi.object().keys(SeasonUncheckedUpdateWithoutIngredientInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(SeasonCreateWithoutIngredientInputSchemaObject),
Joi.object().keys(SeasonUncheckedCreateWithoutIngredientInputSchemaObject))
}