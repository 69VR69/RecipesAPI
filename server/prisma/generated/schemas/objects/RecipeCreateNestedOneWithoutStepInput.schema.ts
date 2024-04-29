// @ts-nocheck
import Joi from 'joi';
import { RecipeCreateWithoutStepInputSchemaObject } from './RecipeCreateWithoutStepInput.schema';
import { RecipeUncheckedCreateWithoutStepInputSchemaObject } from './RecipeUncheckedCreateWithoutStepInput.schema';
import { RecipeCreateOrConnectWithoutStepInputSchemaObject } from './RecipeCreateOrConnectWithoutStepInput.schema';
import { RecipeWhereUniqueInputSchemaObject } from './RecipeWhereUniqueInput.schema'

export const RecipeCreateNestedOneWithoutStepInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(RecipeCreateWithoutStepInputSchemaObject),
Joi.object().keys(RecipeUncheckedCreateWithoutStepInputSchemaObject)),
  connectOrCreate: Joi.object().keys(RecipeCreateOrConnectWithoutStepInputSchemaObject),
  connect: Joi.object().keys(RecipeWhereUniqueInputSchemaObject)
}