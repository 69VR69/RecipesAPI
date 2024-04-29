// @ts-nocheck
import Joi from 'joi';
import { StepIngredientWhereUniqueInputSchemaObject } from './StepIngredientWhereUniqueInput.schema.js';
import { StepIngredientUpdateWithoutIngredientRelationInputSchemaObject } from './StepIngredientUpdateWithoutIngredientRelationInput.schema.js';
import { StepIngredientUncheckedUpdateWithoutIngredientRelationInputSchemaObject } from './StepIngredientUncheckedUpdateWithoutIngredientRelationInput.schema.js';
import { StepIngredientCreateWithoutIngredientRelationInputSchemaObject } from './StepIngredientCreateWithoutIngredientRelationInput.schema.js';
import { StepIngredientUncheckedCreateWithoutIngredientRelationInputSchemaObject } from './StepIngredientUncheckedCreateWithoutIngredientRelationInput.schema.js'

export const StepIngredientUpsertWithWhereUniqueWithoutIngredientRelationInputSchemaObject = {
    where: Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(StepIngredientUpdateWithoutIngredientRelationInputSchemaObject),
Joi.object().keys(StepIngredientUncheckedUpdateWithoutIngredientRelationInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(StepIngredientCreateWithoutIngredientRelationInputSchemaObject),
Joi.object().keys(StepIngredientUncheckedCreateWithoutIngredientRelationInputSchemaObject))
}