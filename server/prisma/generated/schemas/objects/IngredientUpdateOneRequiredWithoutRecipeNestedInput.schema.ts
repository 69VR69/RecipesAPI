// @ts-nocheck
import Joi from 'joi';
import { IngredientCreateWithoutRecipeInputSchemaObject } from './IngredientCreateWithoutRecipeInput.schema';
import { IngredientUncheckedCreateWithoutRecipeInputSchemaObject } from './IngredientUncheckedCreateWithoutRecipeInput.schema';
import { IngredientCreateOrConnectWithoutRecipeInputSchemaObject } from './IngredientCreateOrConnectWithoutRecipeInput.schema';
import { IngredientUpsertWithoutRecipeInputSchemaObject } from './IngredientUpsertWithoutRecipeInput.schema';
import { IngredientWhereUniqueInputSchemaObject } from './IngredientWhereUniqueInput.schema';
import { IngredientUpdateWithoutRecipeInputSchemaObject } from './IngredientUpdateWithoutRecipeInput.schema';
import { IngredientUncheckedUpdateWithoutRecipeInputSchemaObject } from './IngredientUncheckedUpdateWithoutRecipeInput.schema'

export const IngredientUpdateOneRequiredWithoutRecipeNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(IngredientCreateWithoutRecipeInputSchemaObject),
Joi.object().keys(IngredientUncheckedCreateWithoutRecipeInputSchemaObject)),
  connectOrCreate: Joi.object().keys(IngredientCreateOrConnectWithoutRecipeInputSchemaObject),
  upsert: Joi.object().keys(IngredientUpsertWithoutRecipeInputSchemaObject),
  connect: Joi.object().keys(IngredientWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(IngredientUpdateWithoutRecipeInputSchemaObject),
Joi.object().keys(IngredientUncheckedUpdateWithoutRecipeInputSchemaObject))
}