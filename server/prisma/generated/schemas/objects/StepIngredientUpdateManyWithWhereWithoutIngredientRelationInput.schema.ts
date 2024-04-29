// @ts-nocheck
import Joi from 'joi';
import { StepIngredientScalarWhereInputSchemaObject } from './StepIngredientScalarWhereInput.schema.js';
import { StepIngredientUpdateManyMutationInputSchemaObject } from './StepIngredientUpdateManyMutationInput.schema.js';
import { StepIngredientUncheckedUpdateManyWithoutStepInputSchemaObject } from './StepIngredientUncheckedUpdateManyWithoutStepInput.schema.js'

export const StepIngredientUpdateManyWithWhereWithoutIngredientRelationInputSchemaObject = {
    where: Joi.object().keys(StepIngredientScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(StepIngredientUpdateManyMutationInputSchemaObject),
Joi.object().keys(StepIngredientUncheckedUpdateManyWithoutStepInputSchemaObject))
}