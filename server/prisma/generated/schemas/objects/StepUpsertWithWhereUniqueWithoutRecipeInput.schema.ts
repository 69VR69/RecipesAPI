// @ts-nocheck
import Joi from 'joi';
import { StepWhereUniqueInputSchemaObject } from './StepWhereUniqueInput.schema.js';
import { StepUpdateWithoutRecipeInputSchemaObject } from './StepUpdateWithoutRecipeInput.schema.js';
import { StepUncheckedUpdateWithoutRecipeInputSchemaObject } from './StepUncheckedUpdateWithoutRecipeInput.schema.js';
import { StepCreateWithoutRecipeInputSchemaObject } from './StepCreateWithoutRecipeInput.schema.js';
import { StepUncheckedCreateWithoutRecipeInputSchemaObject } from './StepUncheckedCreateWithoutRecipeInput.schema.js'

export const StepUpsertWithWhereUniqueWithoutRecipeInputSchemaObject = {
    where: Joi.object().keys(StepWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(StepUpdateWithoutRecipeInputSchemaObject),
Joi.object().keys(StepUncheckedUpdateWithoutRecipeInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(StepCreateWithoutRecipeInputSchemaObject),
Joi.object().keys(StepUncheckedCreateWithoutRecipeInputSchemaObject))
}