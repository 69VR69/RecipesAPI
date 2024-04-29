// @ts-nocheck
import Joi from 'joi';
import { StepIngredientWhereUniqueInputSchemaObject } from './StepIngredientWhereUniqueInput.schema';
import { StepIngredientUpdateWithoutStepRelationInputSchemaObject } from './StepIngredientUpdateWithoutStepRelationInput.schema';
import { StepIngredientUncheckedUpdateWithoutStepRelationInputSchemaObject } from './StepIngredientUncheckedUpdateWithoutStepRelationInput.schema'

export const StepIngredientUpdateWithWhereUniqueWithoutStepRelationInputSchemaObject = {
    where: Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(StepIngredientUpdateWithoutStepRelationInputSchemaObject),
Joi.object().keys(StepIngredientUncheckedUpdateWithoutStepRelationInputSchemaObject))
}