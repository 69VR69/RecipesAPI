// @ts-nocheck
import Joi from 'joi';
import { StepScalarWhereInputSchemaObject } from './StepScalarWhereInput.schema';
import { StepUpdateManyMutationInputSchemaObject } from './StepUpdateManyMutationInput.schema';
import { StepUncheckedUpdateManyWithoutStepInputSchemaObject } from './StepUncheckedUpdateManyWithoutStepInput.schema'

export const StepUpdateManyWithWhereWithoutRecipeInputSchemaObject = {
    where: Joi.object().keys(StepScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(StepUpdateManyMutationInputSchemaObject),
Joi.object().keys(StepUncheckedUpdateManyWithoutStepInputSchemaObject))
}