// @ts-nocheck
import Joi from 'joi';
import { RecipeWhereUniqueInputSchemaObject } from './RecipeWhereUniqueInput.schema';
import { RecipeCreateWithoutIngredientInputSchemaObject } from './RecipeCreateWithoutIngredientInput.schema';
import { RecipeUncheckedCreateWithoutIngredientInputSchemaObject } from './RecipeUncheckedCreateWithoutIngredientInput.schema'

export const RecipeCreateOrConnectWithoutIngredientInputSchemaObject = {
    where: Joi.object().keys(RecipeWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(RecipeCreateWithoutIngredientInputSchemaObject),
Joi.object().keys(RecipeUncheckedCreateWithoutIngredientInputSchemaObject))
}