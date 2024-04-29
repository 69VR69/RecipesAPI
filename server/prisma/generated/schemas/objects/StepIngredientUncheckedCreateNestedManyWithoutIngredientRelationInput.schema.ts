// @ts-nocheck
import Joi from 'joi';
import { StepIngredientCreateWithoutIngredientRelationInputSchemaObject } from './StepIngredientCreateWithoutIngredientRelationInput.schema.js';
import { StepIngredientUncheckedCreateWithoutIngredientRelationInputSchemaObject } from './StepIngredientUncheckedCreateWithoutIngredientRelationInput.schema.js';
import { StepIngredientCreateOrConnectWithoutIngredientRelationInputSchemaObject } from './StepIngredientCreateOrConnectWithoutIngredientRelationInput.schema.js';
import { StepIngredientWhereUniqueInputSchemaObject } from './StepIngredientWhereUniqueInput.schema.js'

export const StepIngredientUncheckedCreateNestedManyWithoutIngredientRelationInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(StepIngredientCreateWithoutIngredientRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientCreateWithoutIngredientRelationInputSchemaObject)),
Joi.object().keys(StepIngredientUncheckedCreateWithoutIngredientRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientUncheckedCreateWithoutIngredientRelationInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(StepIngredientCreateOrConnectWithoutIngredientRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientCreateOrConnectWithoutIngredientRelationInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject)))
}