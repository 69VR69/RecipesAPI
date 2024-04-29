// @ts-nocheck
import Joi from 'joi';
import { StepWhereUniqueInputSchemaObject } from './StepWhereUniqueInput.schema.js';
import { StepCreateWithoutRecipeInputSchemaObject } from './StepCreateWithoutRecipeInput.schema.js';
import { StepUncheckedCreateWithoutRecipeInputSchemaObject } from './StepUncheckedCreateWithoutRecipeInput.schema.js'

export const StepCreateOrConnectWithoutRecipeInputSchemaObject = {
    where: Joi.object().keys(StepWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(StepCreateWithoutRecipeInputSchemaObject),
Joi.object().keys(StepUncheckedCreateWithoutRecipeInputSchemaObject))
}