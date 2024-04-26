// @ts-nocheck
import Joi from 'joi';
import { RecipeCreateWithoutIngredientInputSchemaObject } from './RecipeCreateWithoutIngredientInput.schema';
import { RecipeUncheckedCreateWithoutIngredientInputSchemaObject } from './RecipeUncheckedCreateWithoutIngredientInput.schema';
import { RecipeCreateOrConnectWithoutIngredientInputSchemaObject } from './RecipeCreateOrConnectWithoutIngredientInput.schema';
import { RecipeUpsertWithoutIngredientInputSchemaObject } from './RecipeUpsertWithoutIngredientInput.schema';
import { RecipeWhereUniqueInputSchemaObject } from './RecipeWhereUniqueInput.schema';
import { RecipeUpdateWithoutIngredientInputSchemaObject } from './RecipeUpdateWithoutIngredientInput.schema';
import { RecipeUncheckedUpdateWithoutIngredientInputSchemaObject } from './RecipeUncheckedUpdateWithoutIngredientInput.schema'

export const RecipeUpdateOneRequiredWithoutIngredientNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(RecipeCreateWithoutIngredientInputSchemaObject),
Joi.object().keys(RecipeUncheckedCreateWithoutIngredientInputSchemaObject)),
  connectOrCreate: Joi.object().keys(RecipeCreateOrConnectWithoutIngredientInputSchemaObject),
  upsert: Joi.object().keys(RecipeUpsertWithoutIngredientInputSchemaObject),
  connect: Joi.object().keys(RecipeWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(RecipeUpdateWithoutIngredientInputSchemaObject),
Joi.object().keys(RecipeUncheckedUpdateWithoutIngredientInputSchemaObject))
}