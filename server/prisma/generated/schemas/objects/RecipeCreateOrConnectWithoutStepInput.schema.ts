// @ts-nocheck
import Joi from 'joi';
import { RecipeWhereUniqueInputSchemaObject } from './RecipeWhereUniqueInput.schema.js';
import { RecipeCreateWithoutStepInputSchemaObject } from './RecipeCreateWithoutStepInput.schema.js';
import { RecipeUncheckedCreateWithoutStepInputSchemaObject } from './RecipeUncheckedCreateWithoutStepInput.schema.js'

export const RecipeCreateOrConnectWithoutStepInputSchemaObject = {
    where: Joi.object().keys(RecipeWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(RecipeCreateWithoutStepInputSchemaObject),
Joi.object().keys(RecipeUncheckedCreateWithoutStepInputSchemaObject))
}