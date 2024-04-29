// @ts-nocheck
import Joi from 'joi';
import { StepWhereUniqueInputSchemaObject } from './StepWhereUniqueInput.schema.js';
import { StepCreateWithoutIngredientInputSchemaObject } from './StepCreateWithoutIngredientInput.schema.js';
import { StepUncheckedCreateWithoutIngredientInputSchemaObject } from './StepUncheckedCreateWithoutIngredientInput.schema.js'

export const StepCreateOrConnectWithoutIngredientInputSchemaObject = {
    where: Joi.object().keys(StepWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(StepCreateWithoutIngredientInputSchemaObject),
Joi.object().keys(StepUncheckedCreateWithoutIngredientInputSchemaObject))
}