// @ts-nocheck
import Joi from 'joi';
import { IngredientCreateWithoutStepInputSchemaObject } from './IngredientCreateWithoutStepInput.schema';
import { IngredientUncheckedCreateWithoutStepInputSchemaObject } from './IngredientUncheckedCreateWithoutStepInput.schema';
import { IngredientCreateOrConnectWithoutStepInputSchemaObject } from './IngredientCreateOrConnectWithoutStepInput.schema';
import { IngredientUpsertWithoutStepInputSchemaObject } from './IngredientUpsertWithoutStepInput.schema';
import { IngredientWhereUniqueInputSchemaObject } from './IngredientWhereUniqueInput.schema';
import { IngredientUpdateWithoutStepInputSchemaObject } from './IngredientUpdateWithoutStepInput.schema';
import { IngredientUncheckedUpdateWithoutStepInputSchemaObject } from './IngredientUncheckedUpdateWithoutStepInput.schema'

export const IngredientUpdateOneRequiredWithoutStepNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(IngredientCreateWithoutStepInputSchemaObject),
Joi.object().keys(IngredientUncheckedCreateWithoutStepInputSchemaObject)),
  connectOrCreate: Joi.object().keys(IngredientCreateOrConnectWithoutStepInputSchemaObject),
  upsert: Joi.object().keys(IngredientUpsertWithoutStepInputSchemaObject),
  connect: Joi.object().keys(IngredientWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(IngredientUpdateWithoutStepInputSchemaObject),
Joi.object().keys(IngredientUncheckedUpdateWithoutStepInputSchemaObject))
}