// @ts-nocheck
import Joi from 'joi';
import { RecipeCreateWithoutIngredientInputSchemaObject } from './RecipeCreateWithoutIngredientInput.schema.js';
import { RecipeUncheckedCreateWithoutIngredientInputSchemaObject } from './RecipeUncheckedCreateWithoutIngredientInput.schema.js';
import { RecipeCreateOrConnectWithoutIngredientInputSchemaObject } from './RecipeCreateOrConnectWithoutIngredientInput.schema.js';
import { RecipeUpsertWithoutIngredientInputSchemaObject } from './RecipeUpsertWithoutIngredientInput.schema.js';
import { RecipeWhereUniqueInputSchemaObject } from './RecipeWhereUniqueInput.schema.js';
import { RecipeUpdateWithoutIngredientInputSchemaObject } from './RecipeUpdateWithoutIngredientInput.schema.js';
import { RecipeUncheckedUpdateWithoutIngredientInputSchemaObject } from './RecipeUncheckedUpdateWithoutIngredientInput.schema.js'

export const RecipeUpdateOneRequiredWithoutIngredientNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(RecipeCreateWithoutIngredientInputSchemaObject),
Joi.object().keys(RecipeUncheckedCreateWithoutIngredientInputSchemaObject)),
  connectOrCreate: Joi.object().keys(RecipeCreateOrConnectWithoutIngredientInputSchemaObject),
  upsert: Joi.object().keys(RecipeUpsertWithoutIngredientInputSchemaObject),
  connect: Joi.object().keys(RecipeWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(RecipeUpdateWithoutIngredientInputSchemaObject),
Joi.object().keys(RecipeUncheckedUpdateWithoutIngredientInputSchemaObject))
}