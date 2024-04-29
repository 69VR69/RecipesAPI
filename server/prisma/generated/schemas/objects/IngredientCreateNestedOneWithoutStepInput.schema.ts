// @ts-nocheck
import Joi from 'joi';
import { IngredientCreateWithoutStepInputSchemaObject } from './IngredientCreateWithoutStepInput.schema';
import { IngredientUncheckedCreateWithoutStepInputSchemaObject } from './IngredientUncheckedCreateWithoutStepInput.schema';
import { IngredientCreateOrConnectWithoutStepInputSchemaObject } from './IngredientCreateOrConnectWithoutStepInput.schema';
import { IngredientWhereUniqueInputSchemaObject } from './IngredientWhereUniqueInput.schema'

export const IngredientCreateNestedOneWithoutStepInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(IngredientCreateWithoutStepInputSchemaObject),
Joi.object().keys(IngredientUncheckedCreateWithoutStepInputSchemaObject)),
  connectOrCreate: Joi.object().keys(IngredientCreateOrConnectWithoutStepInputSchemaObject),
  connect: Joi.object().keys(IngredientWhereUniqueInputSchemaObject)
}