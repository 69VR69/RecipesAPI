// @ts-nocheck
import Joi from 'joi';
import { StepUpdateWithoutIngredientInputSchemaObject } from './StepUpdateWithoutIngredientInput.schema';
import { StepUncheckedUpdateWithoutIngredientInputSchemaObject } from './StepUncheckedUpdateWithoutIngredientInput.schema';
import { StepCreateWithoutIngredientInputSchemaObject } from './StepCreateWithoutIngredientInput.schema';
import { StepUncheckedCreateWithoutIngredientInputSchemaObject } from './StepUncheckedCreateWithoutIngredientInput.schema'

export const StepUpsertWithoutIngredientInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(StepUpdateWithoutIngredientInputSchemaObject),
Joi.object().keys(StepUncheckedUpdateWithoutIngredientInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(StepCreateWithoutIngredientInputSchemaObject),
Joi.object().keys(StepUncheckedCreateWithoutIngredientInputSchemaObject))
}