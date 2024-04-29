// @ts-nocheck
import Joi from 'joi';
import { StepIngredientWhereUniqueInputSchemaObject } from './StepIngredientWhereUniqueInput.schema';
import { StepIngredientUpdateWithoutIngredientRelationInputSchemaObject } from './StepIngredientUpdateWithoutIngredientRelationInput.schema';
import { StepIngredientUncheckedUpdateWithoutIngredientRelationInputSchemaObject } from './StepIngredientUncheckedUpdateWithoutIngredientRelationInput.schema';
import { StepIngredientCreateWithoutIngredientRelationInputSchemaObject } from './StepIngredientCreateWithoutIngredientRelationInput.schema';
import { StepIngredientUncheckedCreateWithoutIngredientRelationInputSchemaObject } from './StepIngredientUncheckedCreateWithoutIngredientRelationInput.schema'

export const StepIngredientUpsertWithWhereUniqueWithoutIngredientRelationInputSchemaObject = {
    where: Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(StepIngredientUpdateWithoutIngredientRelationInputSchemaObject),
Joi.object().keys(StepIngredientUncheckedUpdateWithoutIngredientRelationInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(StepIngredientCreateWithoutIngredientRelationInputSchemaObject),
Joi.object().keys(StepIngredientUncheckedCreateWithoutIngredientRelationInputSchemaObject))
}