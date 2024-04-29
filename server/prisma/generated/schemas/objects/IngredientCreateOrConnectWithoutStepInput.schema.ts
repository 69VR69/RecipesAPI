// @ts-nocheck
import Joi from 'joi';
import { IngredientWhereUniqueInputSchemaObject } from './IngredientWhereUniqueInput.schema';
import { IngredientCreateWithoutStepInputSchemaObject } from './IngredientCreateWithoutStepInput.schema';
import { IngredientUncheckedCreateWithoutStepInputSchemaObject } from './IngredientUncheckedCreateWithoutStepInput.schema'

export const IngredientCreateOrConnectWithoutStepInputSchemaObject = {
    where: Joi.object().keys(IngredientWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(IngredientCreateWithoutStepInputSchemaObject),
Joi.object().keys(IngredientUncheckedCreateWithoutStepInputSchemaObject))
}