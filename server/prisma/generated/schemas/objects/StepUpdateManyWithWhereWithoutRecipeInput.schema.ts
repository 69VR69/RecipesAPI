// @ts-nocheck
import Joi from 'joi';
import { StepScalarWhereInputSchemaObject } from './StepScalarWhereInput.schema.js';
import { StepUpdateManyMutationInputSchemaObject } from './StepUpdateManyMutationInput.schema.js';
import { StepUncheckedUpdateManyWithoutStepInputSchemaObject } from './StepUncheckedUpdateManyWithoutStepInput.schema.js'

export const StepUpdateManyWithWhereWithoutRecipeInputSchemaObject = {
    where: Joi.object().keys(StepScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(StepUpdateManyMutationInputSchemaObject),
Joi.object().keys(StepUncheckedUpdateManyWithoutStepInputSchemaObject))
}