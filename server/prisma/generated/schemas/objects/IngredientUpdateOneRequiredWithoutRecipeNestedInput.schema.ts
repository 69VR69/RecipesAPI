// @ts-nocheck
import Joi from 'joi';
import { IngredientCreateWithoutRecipeInputSchemaObject } from './IngredientCreateWithoutRecipeInput.schema.js';
import { IngredientUncheckedCreateWithoutRecipeInputSchemaObject } from './IngredientUncheckedCreateWithoutRecipeInput.schema.js';
import { IngredientCreateOrConnectWithoutRecipeInputSchemaObject } from './IngredientCreateOrConnectWithoutRecipeInput.schema.js';
import { IngredientUpsertWithoutRecipeInputSchemaObject } from './IngredientUpsertWithoutRecipeInput.schema.js';
import { IngredientWhereUniqueInputSchemaObject } from './IngredientWhereUniqueInput.schema.js';
import { IngredientUpdateWithoutRecipeInputSchemaObject } from './IngredientUpdateWithoutRecipeInput.schema.js';
import { IngredientUncheckedUpdateWithoutRecipeInputSchemaObject } from './IngredientUncheckedUpdateWithoutRecipeInput.schema.js'

export const IngredientUpdateOneRequiredWithoutRecipeNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(IngredientCreateWithoutRecipeInputSchemaObject),
Joi.object().keys(IngredientUncheckedCreateWithoutRecipeInputSchemaObject)),
  connectOrCreate: Joi.object().keys(IngredientCreateOrConnectWithoutRecipeInputSchemaObject),
  upsert: Joi.object().keys(IngredientUpsertWithoutRecipeInputSchemaObject),
  connect: Joi.object().keys(IngredientWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(IngredientUpdateWithoutRecipeInputSchemaObject),
Joi.object().keys(IngredientUncheckedUpdateWithoutRecipeInputSchemaObject))
}