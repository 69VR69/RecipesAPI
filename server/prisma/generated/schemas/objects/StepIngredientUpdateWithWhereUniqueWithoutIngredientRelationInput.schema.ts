// @ts-nocheck
import Joi from 'joi';
import { StepIngredientWhereUniqueInputSchemaObject } from './StepIngredientWhereUniqueInput.schema';
import { StepIngredientUpdateWithoutIngredientRelationInputSchemaObject } from './StepIngredientUpdateWithoutIngredientRelationInput.schema';
import { StepIngredientUncheckedUpdateWithoutIngredientRelationInputSchemaObject } from './StepIngredientUncheckedUpdateWithoutIngredientRelationInput.schema'

export const StepIngredientUpdateWithWhereUniqueWithoutIngredientRelationInputSchemaObject = {
    where: Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(StepIngredientUpdateWithoutIngredientRelationInputSchemaObject),
Joi.object().keys(StepIngredientUncheckedUpdateWithoutIngredientRelationInputSchemaObject))
}