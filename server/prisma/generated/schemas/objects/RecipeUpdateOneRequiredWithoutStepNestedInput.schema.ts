// @ts-nocheck
import Joi from 'joi';
import { RecipeCreateWithoutStepInputSchemaObject } from './RecipeCreateWithoutStepInput.schema';
import { RecipeUncheckedCreateWithoutStepInputSchemaObject } from './RecipeUncheckedCreateWithoutStepInput.schema';
import { RecipeCreateOrConnectWithoutStepInputSchemaObject } from './RecipeCreateOrConnectWithoutStepInput.schema';
import { RecipeUpsertWithoutStepInputSchemaObject } from './RecipeUpsertWithoutStepInput.schema';
import { RecipeWhereUniqueInputSchemaObject } from './RecipeWhereUniqueInput.schema';
import { RecipeUpdateWithoutStepInputSchemaObject } from './RecipeUpdateWithoutStepInput.schema';
import { RecipeUncheckedUpdateWithoutStepInputSchemaObject } from './RecipeUncheckedUpdateWithoutStepInput.schema'

export const RecipeUpdateOneRequiredWithoutStepNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(RecipeCreateWithoutStepInputSchemaObject),
Joi.object().keys(RecipeUncheckedCreateWithoutStepInputSchemaObject)),
  connectOrCreate: Joi.object().keys(RecipeCreateOrConnectWithoutStepInputSchemaObject),
  upsert: Joi.object().keys(RecipeUpsertWithoutStepInputSchemaObject),
  connect: Joi.object().keys(RecipeWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(RecipeUpdateWithoutStepInputSchemaObject),
Joi.object().keys(RecipeUncheckedUpdateWithoutStepInputSchemaObject))
}