// @ts-nocheck
import Joi from 'joi';
import { StepCreateWithoutIngredientInputSchemaObject } from './StepCreateWithoutIngredientInput.schema.js';
import { StepUncheckedCreateWithoutIngredientInputSchemaObject } from './StepUncheckedCreateWithoutIngredientInput.schema.js';
import { StepCreateOrConnectWithoutIngredientInputSchemaObject } from './StepCreateOrConnectWithoutIngredientInput.schema.js';
import { StepWhereUniqueInputSchemaObject } from './StepWhereUniqueInput.schema.js'

export const StepCreateNestedOneWithoutIngredientInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(StepCreateWithoutIngredientInputSchemaObject),
Joi.object().keys(StepUncheckedCreateWithoutIngredientInputSchemaObject)),
  connectOrCreate: Joi.object().keys(StepCreateOrConnectWithoutIngredientInputSchemaObject),
  connect: Joi.object().keys(StepWhereUniqueInputSchemaObject)
}