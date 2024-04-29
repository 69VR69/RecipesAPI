// @ts-nocheck
import Joi from 'joi';
import { StepIngredientWhereUniqueInputSchemaObject } from './StepIngredientWhereUniqueInput.schema';
import { StepIngredientUpdateWithoutStepRelationInputSchemaObject } from './StepIngredientUpdateWithoutStepRelationInput.schema';
import { StepIngredientUncheckedUpdateWithoutStepRelationInputSchemaObject } from './StepIngredientUncheckedUpdateWithoutStepRelationInput.schema';
import { StepIngredientCreateWithoutStepRelationInputSchemaObject } from './StepIngredientCreateWithoutStepRelationInput.schema';
import { StepIngredientUncheckedCreateWithoutStepRelationInputSchemaObject } from './StepIngredientUncheckedCreateWithoutStepRelationInput.schema'

export const StepIngredientUpsertWithWhereUniqueWithoutStepRelationInputSchemaObject = {
    where: Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(StepIngredientUpdateWithoutStepRelationInputSchemaObject),
Joi.object().keys(StepIngredientUncheckedUpdateWithoutStepRelationInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(StepIngredientCreateWithoutStepRelationInputSchemaObject),
Joi.object().keys(StepIngredientUncheckedCreateWithoutStepRelationInputSchemaObject))
}