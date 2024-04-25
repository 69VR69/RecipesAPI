// @ts-nocheck
import Joi from 'joi';
import { RecipeUpdateWithoutIngredientInputSchemaObject } from './RecipeUpdateWithoutIngredientInput.schema';
import { RecipeUncheckedUpdateWithoutIngredientInputSchemaObject } from './RecipeUncheckedUpdateWithoutIngredientInput.schema';
import { RecipeCreateWithoutIngredientInputSchemaObject } from './RecipeCreateWithoutIngredientInput.schema';
import { RecipeUncheckedCreateWithoutIngredientInputSchemaObject } from './RecipeUncheckedCreateWithoutIngredientInput.schema'

export const RecipeUpsertWithoutIngredientInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(RecipeUpdateWithoutIngredientInputSchemaObject),
Joi.object().keys(RecipeUncheckedUpdateWithoutIngredientInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(RecipeCreateWithoutIngredientInputSchemaObject),
Joi.object().keys(RecipeUncheckedCreateWithoutIngredientInputSchemaObject))
}