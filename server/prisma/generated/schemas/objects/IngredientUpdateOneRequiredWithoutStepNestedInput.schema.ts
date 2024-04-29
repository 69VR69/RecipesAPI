// @ts-nocheck
import Joi from 'joi';
import { IngredientCreateWithoutStepInputSchemaObject } from './IngredientCreateWithoutStepInput.schema.js';
import { IngredientUncheckedCreateWithoutStepInputSchemaObject } from './IngredientUncheckedCreateWithoutStepInput.schema.js';
import { IngredientCreateOrConnectWithoutStepInputSchemaObject } from './IngredientCreateOrConnectWithoutStepInput.schema.js';
import { IngredientUpsertWithoutStepInputSchemaObject } from './IngredientUpsertWithoutStepInput.schema.js';
import { IngredientWhereUniqueInputSchemaObject } from './IngredientWhereUniqueInput.schema.js';
import { IngredientUpdateWithoutStepInputSchemaObject } from './IngredientUpdateWithoutStepInput.schema.js';
import { IngredientUncheckedUpdateWithoutStepInputSchemaObject } from './IngredientUncheckedUpdateWithoutStepInput.schema.js'

export const IngredientUpdateOneRequiredWithoutStepNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(IngredientCreateWithoutStepInputSchemaObject),
Joi.object().keys(IngredientUncheckedCreateWithoutStepInputSchemaObject)),
  connectOrCreate: Joi.object().keys(IngredientCreateOrConnectWithoutStepInputSchemaObject),
  upsert: Joi.object().keys(IngredientUpsertWithoutStepInputSchemaObject),
  connect: Joi.object().keys(IngredientWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(IngredientUpdateWithoutStepInputSchemaObject),
Joi.object().keys(IngredientUncheckedUpdateWithoutStepInputSchemaObject))
}