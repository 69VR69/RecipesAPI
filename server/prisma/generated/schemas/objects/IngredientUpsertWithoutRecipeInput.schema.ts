// @ts-nocheck
import Joi from 'joi';
import { IngredientUpdateWithoutRecipeInputSchemaObject } from './IngredientUpdateWithoutRecipeInput.schema';
import { IngredientUncheckedUpdateWithoutRecipeInputSchemaObject } from './IngredientUncheckedUpdateWithoutRecipeInput.schema';
import { IngredientCreateWithoutRecipeInputSchemaObject } from './IngredientCreateWithoutRecipeInput.schema';
import { IngredientUncheckedCreateWithoutRecipeInputSchemaObject } from './IngredientUncheckedCreateWithoutRecipeInput.schema'

export const IngredientUpsertWithoutRecipeInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(IngredientUpdateWithoutRecipeInputSchemaObject),
Joi.object().keys(IngredientUncheckedUpdateWithoutRecipeInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(IngredientCreateWithoutRecipeInputSchemaObject),
Joi.object().keys(IngredientUncheckedCreateWithoutRecipeInputSchemaObject))
}