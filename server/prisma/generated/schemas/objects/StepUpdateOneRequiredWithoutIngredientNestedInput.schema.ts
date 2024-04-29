// @ts-nocheck
import Joi from 'joi';
import { StepCreateWithoutIngredientInputSchemaObject } from './StepCreateWithoutIngredientInput.schema.js';
import { StepUncheckedCreateWithoutIngredientInputSchemaObject } from './StepUncheckedCreateWithoutIngredientInput.schema.js';
import { StepCreateOrConnectWithoutIngredientInputSchemaObject } from './StepCreateOrConnectWithoutIngredientInput.schema.js';
import { StepUpsertWithoutIngredientInputSchemaObject } from './StepUpsertWithoutIngredientInput.schema.js';
import { StepWhereUniqueInputSchemaObject } from './StepWhereUniqueInput.schema.js';
import { StepUpdateWithoutIngredientInputSchemaObject } from './StepUpdateWithoutIngredientInput.schema.js';
import { StepUncheckedUpdateWithoutIngredientInputSchemaObject } from './StepUncheckedUpdateWithoutIngredientInput.schema.js'

export const StepUpdateOneRequiredWithoutIngredientNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(StepCreateWithoutIngredientInputSchemaObject),
Joi.object().keys(StepUncheckedCreateWithoutIngredientInputSchemaObject)),
  connectOrCreate: Joi.object().keys(StepCreateOrConnectWithoutIngredientInputSchemaObject),
  upsert: Joi.object().keys(StepUpsertWithoutIngredientInputSchemaObject),
  connect: Joi.object().keys(StepWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(StepUpdateWithoutIngredientInputSchemaObject),
Joi.object().keys(StepUncheckedUpdateWithoutIngredientInputSchemaObject))
}