// @ts-nocheck
import Joi from 'joi';
import { StepIngredientWhereUniqueInputSchemaObject } from './StepIngredientWhereUniqueInput.schema.js';
import { StepIngredientCreateWithoutStepRelationInputSchemaObject } from './StepIngredientCreateWithoutStepRelationInput.schema.js';
import { StepIngredientUncheckedCreateWithoutStepRelationInputSchemaObject } from './StepIngredientUncheckedCreateWithoutStepRelationInput.schema.js'

export const StepIngredientCreateOrConnectWithoutStepRelationInputSchemaObject = {
    where: Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(StepIngredientCreateWithoutStepRelationInputSchemaObject),
Joi.object().keys(StepIngredientUncheckedCreateWithoutStepRelationInputSchemaObject))
}