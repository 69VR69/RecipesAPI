// @ts-nocheck
import Joi from 'joi';
import { RecipeUpdateWithoutIngredientInputSchemaObject } from './RecipeUpdateWithoutIngredientInput.schema.js';
import { RecipeUncheckedUpdateWithoutIngredientInputSchemaObject } from './RecipeUncheckedUpdateWithoutIngredientInput.schema.js';
import { RecipeCreateWithoutIngredientInputSchemaObject } from './RecipeCreateWithoutIngredientInput.schema.js';
import { RecipeUncheckedCreateWithoutIngredientInputSchemaObject } from './RecipeUncheckedCreateWithoutIngredientInput.schema.js'

export const RecipeUpsertWithoutIngredientInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(RecipeUpdateWithoutIngredientInputSchemaObject),
Joi.object().keys(RecipeUncheckedUpdateWithoutIngredientInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(RecipeCreateWithoutIngredientInputSchemaObject),
Joi.object().keys(RecipeUncheckedCreateWithoutIngredientInputSchemaObject))
}