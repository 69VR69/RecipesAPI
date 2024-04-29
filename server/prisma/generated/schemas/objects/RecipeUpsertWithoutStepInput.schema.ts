// @ts-nocheck
import Joi from 'joi';
import { RecipeUpdateWithoutStepInputSchemaObject } from './RecipeUpdateWithoutStepInput.schema.js';
import { RecipeUncheckedUpdateWithoutStepInputSchemaObject } from './RecipeUncheckedUpdateWithoutStepInput.schema.js';
import { RecipeCreateWithoutStepInputSchemaObject } from './RecipeCreateWithoutStepInput.schema.js';
import { RecipeUncheckedCreateWithoutStepInputSchemaObject } from './RecipeUncheckedCreateWithoutStepInput.schema.js'

export const RecipeUpsertWithoutStepInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(RecipeUpdateWithoutStepInputSchemaObject),
Joi.object().keys(RecipeUncheckedUpdateWithoutStepInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(RecipeCreateWithoutStepInputSchemaObject),
Joi.object().keys(RecipeUncheckedCreateWithoutStepInputSchemaObject))
}