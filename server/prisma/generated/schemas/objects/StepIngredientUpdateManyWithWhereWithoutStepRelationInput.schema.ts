// @ts-nocheck
import Joi from 'joi';
import { StepIngredientScalarWhereInputSchemaObject } from './StepIngredientScalarWhereInput.schema.js';
import { StepIngredientUpdateManyMutationInputSchemaObject } from './StepIngredientUpdateManyMutationInput.schema.js';
import { StepIngredientUncheckedUpdateManyWithoutIngredientInputSchemaObject } from './StepIngredientUncheckedUpdateManyWithoutIngredientInput.schema.js'

export const StepIngredientUpdateManyWithWhereWithoutStepRelationInputSchemaObject = {
    where: Joi.object().keys(StepIngredientScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(StepIngredientUpdateManyMutationInputSchemaObject),
Joi.object().keys(StepIngredientUncheckedUpdateManyWithoutIngredientInputSchemaObject))
}