// @ts-nocheck
import Joi from 'joi';
import { RecipeWhereUniqueInputSchemaObject } from './RecipeWhereUniqueInput.schema.js.js';
import { RecipeCreateWithoutIngredientInputSchemaObject } from './RecipeCreateWithoutIngredientInput.schema.js.js';
import { RecipeUncheckedCreateWithoutIngredientInputSchemaObject } from './RecipeUncheckedCreateWithoutIngredientInput.schema.js.js'

export const RecipeCreateOrConnectWithoutIngredientInputSchemaObject = {
    where: Joi.object().keys(RecipeWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(RecipeCreateWithoutIngredientInputSchemaObject),
Joi.object().keys(RecipeUncheckedCreateWithoutIngredientInputSchemaObject))
}