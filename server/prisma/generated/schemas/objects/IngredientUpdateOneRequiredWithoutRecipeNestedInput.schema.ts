// @ts-nocheck
import Joi from 'joi';
import { IngredientCreateWithoutRecipeInputSchemaObject } from './IngredientCreateWithoutRecipeInput.schema.js.js';
import { IngredientUncheckedCreateWithoutRecipeInputSchemaObject } from './IngredientUncheckedCreateWithoutRecipeInput.schema.js.js';
import { IngredientCreateOrConnectWithoutRecipeInputSchemaObject } from './IngredientCreateOrConnectWithoutRecipeInput.schema.js.js';
import { IngredientUpsertWithoutRecipeInputSchemaObject } from './IngredientUpsertWithoutRecipeInput.schema.js.js';
import { IngredientWhereUniqueInputSchemaObject } from './IngredientWhereUniqueInput.schema.js.js';
import { IngredientUpdateWithoutRecipeInputSchemaObject } from './IngredientUpdateWithoutRecipeInput.schema.js.js';
import { IngredientUncheckedUpdateWithoutRecipeInputSchemaObject } from './IngredientUncheckedUpdateWithoutRecipeInput.schema.js.js'

export const IngredientUpdateOneRequiredWithoutRecipeNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(IngredientCreateWithoutRecipeInputSchemaObject),
Joi.object().keys(IngredientUncheckedCreateWithoutRecipeInputSchemaObject)),
  connectOrCreate: Joi.object().keys(IngredientCreateOrConnectWithoutRecipeInputSchemaObject),
  upsert: Joi.object().keys(IngredientUpsertWithoutRecipeInputSchemaObject),
  connect: Joi.object().keys(IngredientWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(IngredientUpdateWithoutRecipeInputSchemaObject),
Joi.object().keys(IngredientUncheckedUpdateWithoutRecipeInputSchemaObject))
}