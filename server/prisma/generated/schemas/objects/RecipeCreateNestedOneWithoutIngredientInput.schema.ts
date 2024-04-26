// @ts-nocheck
import Joi from 'joi';
import { RecipeCreateWithoutIngredientInputSchemaObject } from './RecipeCreateWithoutIngredientInput.schema';
import { RecipeUncheckedCreateWithoutIngredientInputSchemaObject } from './RecipeUncheckedCreateWithoutIngredientInput.schema';
import { RecipeCreateOrConnectWithoutIngredientInputSchemaObject } from './RecipeCreateOrConnectWithoutIngredientInput.schema';
import { RecipeWhereUniqueInputSchemaObject } from './RecipeWhereUniqueInput.schema'

export const RecipeCreateNestedOneWithoutIngredientInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(RecipeCreateWithoutIngredientInputSchemaObject),
Joi.object().keys(RecipeUncheckedCreateWithoutIngredientInputSchemaObject)),
  connectOrCreate: Joi.object().keys(RecipeCreateOrConnectWithoutIngredientInputSchemaObject),
  connect: Joi.object().keys(RecipeWhereUniqueInputSchemaObject)
}