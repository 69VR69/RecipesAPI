// @ts-nocheck
import Joi from 'joi';
import { StepIngredientScalarWhereInputSchemaObject } from './StepIngredientScalarWhereInput.schema';
import { StepIngredientUpdateManyMutationInputSchemaObject } from './StepIngredientUpdateManyMutationInput.schema';
import { StepIngredientUncheckedUpdateManyWithoutIngredientInputSchemaObject } from './StepIngredientUncheckedUpdateManyWithoutIngredientInput.schema'

export const StepIngredientUpdateManyWithWhereWithoutStepRelationInputSchemaObject = {
    where: Joi.object().keys(StepIngredientScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(StepIngredientUpdateManyMutationInputSchemaObject),
Joi.object().keys(StepIngredientUncheckedUpdateManyWithoutIngredientInputSchemaObject))
}