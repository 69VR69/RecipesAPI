// @ts-nocheck
import Joi from 'joi';
import { StepIngredientWhereUniqueInputSchemaObject } from './StepIngredientWhereUniqueInput.schema.js';
import { StepIngredientCreateWithoutIngredientRelationInputSchemaObject } from './StepIngredientCreateWithoutIngredientRelationInput.schema.js';
import { StepIngredientUncheckedCreateWithoutIngredientRelationInputSchemaObject } from './StepIngredientUncheckedCreateWithoutIngredientRelationInput.schema.js'

export const StepIngredientCreateOrConnectWithoutIngredientRelationInputSchemaObject = {
    where: Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(StepIngredientCreateWithoutIngredientRelationInputSchemaObject),
Joi.object().keys(StepIngredientUncheckedCreateWithoutIngredientRelationInputSchemaObject))
}