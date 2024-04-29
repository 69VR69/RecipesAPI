// @ts-nocheck
import Joi from 'joi';
import { StepIngredientScalarWhereInputSchemaObject } from './StepIngredientScalarWhereInput.schema';
import { StepIngredientUpdateManyMutationInputSchemaObject } from './StepIngredientUpdateManyMutationInput.schema';
import { StepIngredientUncheckedUpdateManyWithoutStepInputSchemaObject } from './StepIngredientUncheckedUpdateManyWithoutStepInput.schema'

export const StepIngredientUpdateManyWithWhereWithoutIngredientRelationInputSchemaObject = {
    where: Joi.object().keys(StepIngredientScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(StepIngredientUpdateManyMutationInputSchemaObject),
Joi.object().keys(StepIngredientUncheckedUpdateManyWithoutStepInputSchemaObject))
}