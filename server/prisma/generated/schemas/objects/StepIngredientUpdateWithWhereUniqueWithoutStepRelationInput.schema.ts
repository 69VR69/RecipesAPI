// @ts-nocheck
import Joi from 'joi';
import { StepIngredientWhereUniqueInputSchemaObject } from './StepIngredientWhereUniqueInput.schema.js';
import { StepIngredientUpdateWithoutStepRelationInputSchemaObject } from './StepIngredientUpdateWithoutStepRelationInput.schema.js';
import { StepIngredientUncheckedUpdateWithoutStepRelationInputSchemaObject } from './StepIngredientUncheckedUpdateWithoutStepRelationInput.schema.js'

export const StepIngredientUpdateWithWhereUniqueWithoutStepRelationInputSchemaObject = {
    where: Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(StepIngredientUpdateWithoutStepRelationInputSchemaObject),
Joi.object().keys(StepIngredientUncheckedUpdateWithoutStepRelationInputSchemaObject))
}