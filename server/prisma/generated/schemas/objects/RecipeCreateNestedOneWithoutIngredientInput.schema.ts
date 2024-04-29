// @ts-nocheck
import Joi from 'joi';
import { RecipeCreateWithoutIngredientInputSchemaObject } from './RecipeCreateWithoutIngredientInput.schema.js';
import { RecipeUncheckedCreateWithoutIngredientInputSchemaObject } from './RecipeUncheckedCreateWithoutIngredientInput.schema.js';
import { RecipeCreateOrConnectWithoutIngredientInputSchemaObject } from './RecipeCreateOrConnectWithoutIngredientInput.schema.js';
import { RecipeWhereUniqueInputSchemaObject } from './RecipeWhereUniqueInput.schema.js'

export const RecipeCreateNestedOneWithoutIngredientInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(RecipeCreateWithoutIngredientInputSchemaObject),
Joi.object().keys(RecipeUncheckedCreateWithoutIngredientInputSchemaObject)),
  connectOrCreate: Joi.object().keys(RecipeCreateOrConnectWithoutIngredientInputSchemaObject),
  connect: Joi.object().keys(RecipeWhereUniqueInputSchemaObject)
}