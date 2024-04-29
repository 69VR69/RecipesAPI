// @ts-nocheck
import Joi from 'joi';
import { StepWhereUniqueInputSchemaObject } from './StepWhereUniqueInput.schema';
import { StepUpdateWithoutRecipeInputSchemaObject } from './StepUpdateWithoutRecipeInput.schema';
import { StepUncheckedUpdateWithoutRecipeInputSchemaObject } from './StepUncheckedUpdateWithoutRecipeInput.schema';
import { StepCreateWithoutRecipeInputSchemaObject } from './StepCreateWithoutRecipeInput.schema';
import { StepUncheckedCreateWithoutRecipeInputSchemaObject } from './StepUncheckedCreateWithoutRecipeInput.schema'

export const StepUpsertWithWhereUniqueWithoutRecipeInputSchemaObject = {
    where: Joi.object().keys(StepWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(StepUpdateWithoutRecipeInputSchemaObject),
Joi.object().keys(StepUncheckedUpdateWithoutRecipeInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(StepCreateWithoutRecipeInputSchemaObject),
Joi.object().keys(StepUncheckedCreateWithoutRecipeInputSchemaObject))
}