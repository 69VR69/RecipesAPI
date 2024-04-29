// @ts-nocheck
import Joi from 'joi';
import { RecipeCreateWithoutIngredientInputSchemaObject } from './RecipeCreateWithoutIngredientInput.schema.js.js';
import { RecipeUncheckedCreateWithoutIngredientInputSchemaObject } from './RecipeUncheckedCreateWithoutIngredientInput.schema.js.js';
import { RecipeCreateOrConnectWithoutIngredientInputSchemaObject } from './RecipeCreateOrConnectWithoutIngredientInput.schema.js.js';
import { RecipeUpsertWithoutIngredientInputSchemaObject } from './RecipeUpsertWithoutIngredientInput.schema.js.js';
import { RecipeWhereUniqueInputSchemaObject } from './RecipeWhereUniqueInput.schema.js.js';
import { RecipeUpdateWithoutIngredientInputSchemaObject } from './RecipeUpdateWithoutIngredientInput.schema.js.js';
import { RecipeUncheckedUpdateWithoutIngredientInputSchemaObject } from './RecipeUncheckedUpdateWithoutIngredientInput.schema.js.js'

export const RecipeUpdateOneRequiredWithoutIngredientNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(RecipeCreateWithoutIngredientInputSchemaObject),
Joi.object().keys(RecipeUncheckedCreateWithoutIngredientInputSchemaObject)),
  connectOrCreate: Joi.object().keys(RecipeCreateOrConnectWithoutIngredientInputSchemaObject),
  upsert: Joi.object().keys(RecipeUpsertWithoutIngredientInputSchemaObject),
  connect: Joi.object().keys(RecipeWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(RecipeUpdateWithoutIngredientInputSchemaObject),
Joi.object().keys(RecipeUncheckedUpdateWithoutIngredientInputSchemaObject))
}