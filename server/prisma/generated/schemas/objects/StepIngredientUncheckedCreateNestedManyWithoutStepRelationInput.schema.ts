// @ts-nocheck
import Joi from 'joi';
import { StepIngredientCreateWithoutStepRelationInputSchemaObject } from './StepIngredientCreateWithoutStepRelationInput.schema.js';
import { StepIngredientUncheckedCreateWithoutStepRelationInputSchemaObject } from './StepIngredientUncheckedCreateWithoutStepRelationInput.schema.js';
import { StepIngredientCreateOrConnectWithoutStepRelationInputSchemaObject } from './StepIngredientCreateOrConnectWithoutStepRelationInput.schema.js';
import { StepIngredientWhereUniqueInputSchemaObject } from './StepIngredientWhereUniqueInput.schema.js'

export const StepIngredientUncheckedCreateNestedManyWithoutStepRelationInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(StepIngredientCreateWithoutStepRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientCreateWithoutStepRelationInputSchemaObject)),
Joi.object().keys(StepIngredientUncheckedCreateWithoutStepRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientUncheckedCreateWithoutStepRelationInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(StepIngredientCreateOrConnectWithoutStepRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientCreateOrConnectWithoutStepRelationInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject)))
}