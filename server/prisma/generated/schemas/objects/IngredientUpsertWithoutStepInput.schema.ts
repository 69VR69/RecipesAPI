// @ts-nocheck
import Joi from 'joi';
import { IngredientUpdateWithoutStepInputSchemaObject } from './IngredientUpdateWithoutStepInput.schema.js';
import { IngredientUncheckedUpdateWithoutStepInputSchemaObject } from './IngredientUncheckedUpdateWithoutStepInput.schema.js';
import { IngredientCreateWithoutStepInputSchemaObject } from './IngredientCreateWithoutStepInput.schema.js';
import { IngredientUncheckedCreateWithoutStepInputSchemaObject } from './IngredientUncheckedCreateWithoutStepInput.schema.js'

export const IngredientUpsertWithoutStepInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(IngredientUpdateWithoutStepInputSchemaObject),
Joi.object().keys(IngredientUncheckedUpdateWithoutStepInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(IngredientCreateWithoutStepInputSchemaObject),
Joi.object().keys(IngredientUncheckedCreateWithoutStepInputSchemaObject))
}