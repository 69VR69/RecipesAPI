// @ts-nocheck
import Joi from 'joi';
import { StepUpdateWithoutIngredientInputSchemaObject } from './StepUpdateWithoutIngredientInput.schema.js';
import { StepUncheckedUpdateWithoutIngredientInputSchemaObject } from './StepUncheckedUpdateWithoutIngredientInput.schema.js';
import { StepCreateWithoutIngredientInputSchemaObject } from './StepCreateWithoutIngredientInput.schema.js';
import { StepUncheckedCreateWithoutIngredientInputSchemaObject } from './StepUncheckedCreateWithoutIngredientInput.schema.js'

export const StepUpsertWithoutIngredientInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(StepUpdateWithoutIngredientInputSchemaObject),
Joi.object().keys(StepUncheckedUpdateWithoutIngredientInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(StepCreateWithoutIngredientInputSchemaObject),
Joi.object().keys(StepUncheckedCreateWithoutIngredientInputSchemaObject))
}