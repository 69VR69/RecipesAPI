// @ts-nocheck
import Joi from 'joi';
import { StepCreateWithoutRecipeInputSchemaObject } from './StepCreateWithoutRecipeInput.schema.js';
import { StepUncheckedCreateWithoutRecipeInputSchemaObject } from './StepUncheckedCreateWithoutRecipeInput.schema.js';
import { StepCreateOrConnectWithoutRecipeInputSchemaObject } from './StepCreateOrConnectWithoutRecipeInput.schema.js';
import { StepWhereUniqueInputSchemaObject } from './StepWhereUniqueInput.schema.js'

export const StepCreateNestedManyWithoutRecipeInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(StepCreateWithoutRecipeInputSchemaObject),
Joi.array().items(Joi.object().keys(StepCreateWithoutRecipeInputSchemaObject)),
Joi.object().keys(StepUncheckedCreateWithoutRecipeInputSchemaObject),
Joi.array().items(Joi.object().keys(StepUncheckedCreateWithoutRecipeInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(StepCreateOrConnectWithoutRecipeInputSchemaObject),
Joi.array().items(Joi.object().keys(StepCreateOrConnectWithoutRecipeInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(StepWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(StepWhereUniqueInputSchemaObject)))
}