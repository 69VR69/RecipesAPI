// @ts-nocheck
import Joi from 'joi';
import { StepWhereUniqueInputSchemaObject } from './StepWhereUniqueInput.schema.js';
import { StepUpdateWithoutRecipeInputSchemaObject } from './StepUpdateWithoutRecipeInput.schema.js';
import { StepUncheckedUpdateWithoutRecipeInputSchemaObject } from './StepUncheckedUpdateWithoutRecipeInput.schema.js'

export const StepUpdateWithWhereUniqueWithoutRecipeInputSchemaObject = {
    where: Joi.object().keys(StepWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(StepUpdateWithoutRecipeInputSchemaObject),
Joi.object().keys(StepUncheckedUpdateWithoutRecipeInputSchemaObject))
}