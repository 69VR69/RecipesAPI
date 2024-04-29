// @ts-nocheck
import Joi from 'joi';
import { RecipeUpdateWithoutStepInputSchemaObject } from './RecipeUpdateWithoutStepInput.schema';
import { RecipeUncheckedUpdateWithoutStepInputSchemaObject } from './RecipeUncheckedUpdateWithoutStepInput.schema';
import { RecipeCreateWithoutStepInputSchemaObject } from './RecipeCreateWithoutStepInput.schema';
import { RecipeUncheckedCreateWithoutStepInputSchemaObject } from './RecipeUncheckedCreateWithoutStepInput.schema'

export const RecipeUpsertWithoutStepInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(RecipeUpdateWithoutStepInputSchemaObject),
Joi.object().keys(RecipeUncheckedUpdateWithoutStepInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(RecipeCreateWithoutStepInputSchemaObject),
Joi.object().keys(RecipeUncheckedCreateWithoutStepInputSchemaObject))
}