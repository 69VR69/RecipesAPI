// @ts-nocheck
import Joi from 'joi';
import { StepWhereUniqueInputSchemaObject } from './StepWhereUniqueInput.schema';
import { StepUpdateWithoutRecipeInputSchemaObject } from './StepUpdateWithoutRecipeInput.schema';
import { StepUncheckedUpdateWithoutRecipeInputSchemaObject } from './StepUncheckedUpdateWithoutRecipeInput.schema'

export const StepUpdateWithWhereUniqueWithoutRecipeInputSchemaObject = {
    where: Joi.object().keys(StepWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(StepUpdateWithoutRecipeInputSchemaObject),
Joi.object().keys(StepUncheckedUpdateWithoutRecipeInputSchemaObject))
}