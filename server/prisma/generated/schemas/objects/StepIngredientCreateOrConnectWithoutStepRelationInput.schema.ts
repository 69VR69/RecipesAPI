// @ts-nocheck
import Joi from 'joi';
import { StepIngredientWhereUniqueInputSchemaObject } from './StepIngredientWhereUniqueInput.schema';
import { StepIngredientCreateWithoutStepRelationInputSchemaObject } from './StepIngredientCreateWithoutStepRelationInput.schema';
import { StepIngredientUncheckedCreateWithoutStepRelationInputSchemaObject } from './StepIngredientUncheckedCreateWithoutStepRelationInput.schema'

export const StepIngredientCreateOrConnectWithoutStepRelationInputSchemaObject = {
    where: Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(StepIngredientCreateWithoutStepRelationInputSchemaObject),
Joi.object().keys(StepIngredientUncheckedCreateWithoutStepRelationInputSchemaObject))
}