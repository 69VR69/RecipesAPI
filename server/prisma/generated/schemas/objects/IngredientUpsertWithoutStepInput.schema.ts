// @ts-nocheck
import Joi from 'joi';
import { IngredientUpdateWithoutStepInputSchemaObject } from './IngredientUpdateWithoutStepInput.schema';
import { IngredientUncheckedUpdateWithoutStepInputSchemaObject } from './IngredientUncheckedUpdateWithoutStepInput.schema';
import { IngredientCreateWithoutStepInputSchemaObject } from './IngredientCreateWithoutStepInput.schema';
import { IngredientUncheckedCreateWithoutStepInputSchemaObject } from './IngredientUncheckedCreateWithoutStepInput.schema'

export const IngredientUpsertWithoutStepInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(IngredientUpdateWithoutStepInputSchemaObject),
Joi.object().keys(IngredientUncheckedUpdateWithoutStepInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(IngredientCreateWithoutStepInputSchemaObject),
Joi.object().keys(IngredientUncheckedCreateWithoutStepInputSchemaObject))
}