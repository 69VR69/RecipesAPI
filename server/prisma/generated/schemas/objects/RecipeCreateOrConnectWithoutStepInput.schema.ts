// @ts-nocheck
import Joi from 'joi';
import { RecipeWhereUniqueInputSchemaObject } from './RecipeWhereUniqueInput.schema';
import { RecipeCreateWithoutStepInputSchemaObject } from './RecipeCreateWithoutStepInput.schema';
import { RecipeUncheckedCreateWithoutStepInputSchemaObject } from './RecipeUncheckedCreateWithoutStepInput.schema'

export const RecipeCreateOrConnectWithoutStepInputSchemaObject = {
    where: Joi.object().keys(RecipeWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(RecipeCreateWithoutStepInputSchemaObject),
Joi.object().keys(RecipeUncheckedCreateWithoutStepInputSchemaObject))
}