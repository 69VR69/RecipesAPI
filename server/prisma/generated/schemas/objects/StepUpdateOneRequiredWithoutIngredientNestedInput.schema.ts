// @ts-nocheck
import Joi from 'joi';
import { StepCreateWithoutIngredientInputSchemaObject } from './StepCreateWithoutIngredientInput.schema';
import { StepUncheckedCreateWithoutIngredientInputSchemaObject } from './StepUncheckedCreateWithoutIngredientInput.schema';
import { StepCreateOrConnectWithoutIngredientInputSchemaObject } from './StepCreateOrConnectWithoutIngredientInput.schema';
import { StepUpsertWithoutIngredientInputSchemaObject } from './StepUpsertWithoutIngredientInput.schema';
import { StepWhereUniqueInputSchemaObject } from './StepWhereUniqueInput.schema';
import { StepUpdateWithoutIngredientInputSchemaObject } from './StepUpdateWithoutIngredientInput.schema';
import { StepUncheckedUpdateWithoutIngredientInputSchemaObject } from './StepUncheckedUpdateWithoutIngredientInput.schema'

export const StepUpdateOneRequiredWithoutIngredientNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(StepCreateWithoutIngredientInputSchemaObject),
Joi.object().keys(StepUncheckedCreateWithoutIngredientInputSchemaObject)),
  connectOrCreate: Joi.object().keys(StepCreateOrConnectWithoutIngredientInputSchemaObject),
  upsert: Joi.object().keys(StepUpsertWithoutIngredientInputSchemaObject),
  connect: Joi.object().keys(StepWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(StepUpdateWithoutIngredientInputSchemaObject),
Joi.object().keys(StepUncheckedUpdateWithoutIngredientInputSchemaObject))
}