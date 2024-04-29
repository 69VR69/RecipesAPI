// @ts-nocheck
import Joi from 'joi';
import { IngredientUpdateWithoutRecipeInputSchemaObject } from './IngredientUpdateWithoutRecipeInput.schema.js';
import { IngredientUncheckedUpdateWithoutRecipeInputSchemaObject } from './IngredientUncheckedUpdateWithoutRecipeInput.schema.js';
import { IngredientCreateWithoutRecipeInputSchemaObject } from './IngredientCreateWithoutRecipeInput.schema.js';
import { IngredientUncheckedCreateWithoutRecipeInputSchemaObject } from './IngredientUncheckedCreateWithoutRecipeInput.schema.js'

export const IngredientUpsertWithoutRecipeInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(IngredientUpdateWithoutRecipeInputSchemaObject),
Joi.object().keys(IngredientUncheckedUpdateWithoutRecipeInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(IngredientCreateWithoutRecipeInputSchemaObject),
Joi.object().keys(IngredientUncheckedCreateWithoutRecipeInputSchemaObject))
}