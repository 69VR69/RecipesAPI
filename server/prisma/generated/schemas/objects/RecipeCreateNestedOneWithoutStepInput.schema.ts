// @ts-nocheck
import Joi from 'joi';
import { RecipeCreateWithoutStepInputSchemaObject } from './RecipeCreateWithoutStepInput.schema.js';
import { RecipeUncheckedCreateWithoutStepInputSchemaObject } from './RecipeUncheckedCreateWithoutStepInput.schema.js';
import { RecipeCreateOrConnectWithoutStepInputSchemaObject } from './RecipeCreateOrConnectWithoutStepInput.schema.js';
import { RecipeWhereUniqueInputSchemaObject } from './RecipeWhereUniqueInput.schema.js'

export const RecipeCreateNestedOneWithoutStepInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(RecipeCreateWithoutStepInputSchemaObject),
Joi.object().keys(RecipeUncheckedCreateWithoutStepInputSchemaObject)),
  connectOrCreate: Joi.object().keys(RecipeCreateOrConnectWithoutStepInputSchemaObject),
  connect: Joi.object().keys(RecipeWhereUniqueInputSchemaObject)
}