// @ts-nocheck
import Joi from 'joi';
import { StepCreateWithoutIngredientInputSchemaObject } from './StepCreateWithoutIngredientInput.schema';
import { StepUncheckedCreateWithoutIngredientInputSchemaObject } from './StepUncheckedCreateWithoutIngredientInput.schema';
import { StepCreateOrConnectWithoutIngredientInputSchemaObject } from './StepCreateOrConnectWithoutIngredientInput.schema';
import { StepWhereUniqueInputSchemaObject } from './StepWhereUniqueInput.schema'

export const StepCreateNestedOneWithoutIngredientInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(StepCreateWithoutIngredientInputSchemaObject),
Joi.object().keys(StepUncheckedCreateWithoutIngredientInputSchemaObject)),
  connectOrCreate: Joi.object().keys(StepCreateOrConnectWithoutIngredientInputSchemaObject),
  connect: Joi.object().keys(StepWhereUniqueInputSchemaObject)
}