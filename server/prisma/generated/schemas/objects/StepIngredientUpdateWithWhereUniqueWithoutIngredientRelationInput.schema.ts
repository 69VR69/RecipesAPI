// @ts-nocheck
import Joi from 'joi';
import { StepIngredientWhereUniqueInputSchemaObject } from './StepIngredientWhereUniqueInput.schema.js';
import { StepIngredientUpdateWithoutIngredientRelationInputSchemaObject } from './StepIngredientUpdateWithoutIngredientRelationInput.schema.js';
import { StepIngredientUncheckedUpdateWithoutIngredientRelationInputSchemaObject } from './StepIngredientUncheckedUpdateWithoutIngredientRelationInput.schema.js'

export const StepIngredientUpdateWithWhereUniqueWithoutIngredientRelationInputSchemaObject = {
    where: Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(StepIngredientUpdateWithoutIngredientRelationInputSchemaObject),
Joi.object().keys(StepIngredientUncheckedUpdateWithoutIngredientRelationInputSchemaObject))
}