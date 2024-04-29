// @ts-nocheck
import Joi from 'joi';
import { RecipeCreateWithoutStepInputSchemaObject } from './RecipeCreateWithoutStepInput.schema.js';
import { RecipeUncheckedCreateWithoutStepInputSchemaObject } from './RecipeUncheckedCreateWithoutStepInput.schema.js';
import { RecipeCreateOrConnectWithoutStepInputSchemaObject } from './RecipeCreateOrConnectWithoutStepInput.schema.js';
import { RecipeUpsertWithoutStepInputSchemaObject } from './RecipeUpsertWithoutStepInput.schema.js';
import { RecipeWhereUniqueInputSchemaObject } from './RecipeWhereUniqueInput.schema.js';
import { RecipeUpdateWithoutStepInputSchemaObject } from './RecipeUpdateWithoutStepInput.schema.js';
import { RecipeUncheckedUpdateWithoutStepInputSchemaObject } from './RecipeUncheckedUpdateWithoutStepInput.schema.js'

export const RecipeUpdateOneRequiredWithoutStepNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(RecipeCreateWithoutStepInputSchemaObject),
Joi.object().keys(RecipeUncheckedCreateWithoutStepInputSchemaObject)),
  connectOrCreate: Joi.object().keys(RecipeCreateOrConnectWithoutStepInputSchemaObject),
  upsert: Joi.object().keys(RecipeUpsertWithoutStepInputSchemaObject),
  connect: Joi.object().keys(RecipeWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(RecipeUpdateWithoutStepInputSchemaObject),
Joi.object().keys(RecipeUncheckedUpdateWithoutStepInputSchemaObject))
}