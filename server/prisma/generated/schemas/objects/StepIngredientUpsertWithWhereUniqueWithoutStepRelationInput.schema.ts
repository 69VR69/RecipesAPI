// @ts-nocheck
import Joi from 'joi';
import { StepIngredientWhereUniqueInputSchemaObject } from './StepIngredientWhereUniqueInput.schema.js';
import { StepIngredientUpdateWithoutStepRelationInputSchemaObject } from './StepIngredientUpdateWithoutStepRelationInput.schema.js';
import { StepIngredientUncheckedUpdateWithoutStepRelationInputSchemaObject } from './StepIngredientUncheckedUpdateWithoutStepRelationInput.schema.js';
import { StepIngredientCreateWithoutStepRelationInputSchemaObject } from './StepIngredientCreateWithoutStepRelationInput.schema.js';
import { StepIngredientUncheckedCreateWithoutStepRelationInputSchemaObject } from './StepIngredientUncheckedCreateWithoutStepRelationInput.schema.js'

export const StepIngredientUpsertWithWhereUniqueWithoutStepRelationInputSchemaObject = {
    where: Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(StepIngredientUpdateWithoutStepRelationInputSchemaObject),
Joi.object().keys(StepIngredientUncheckedUpdateWithoutStepRelationInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(StepIngredientCreateWithoutStepRelationInputSchemaObject),
Joi.object().keys(StepIngredientUncheckedCreateWithoutStepRelationInputSchemaObject))
}