// @ts-nocheck
import Joi from 'joi';
import { IngredientCreateWithoutStepInputSchemaObject } from './IngredientCreateWithoutStepInput.schema.js';
import { IngredientUncheckedCreateWithoutStepInputSchemaObject } from './IngredientUncheckedCreateWithoutStepInput.schema.js';
import { IngredientCreateOrConnectWithoutStepInputSchemaObject } from './IngredientCreateOrConnectWithoutStepInput.schema.js';
import { IngredientWhereUniqueInputSchemaObject } from './IngredientWhereUniqueInput.schema.js'

export const IngredientCreateNestedOneWithoutStepInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(IngredientCreateWithoutStepInputSchemaObject),
Joi.object().keys(IngredientUncheckedCreateWithoutStepInputSchemaObject)),
  connectOrCreate: Joi.object().keys(IngredientCreateOrConnectWithoutStepInputSchemaObject),
  connect: Joi.object().keys(IngredientWhereUniqueInputSchemaObject)
}