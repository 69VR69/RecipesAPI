// @ts-nocheck
import Joi from 'joi';
import { IngredientCreateWithoutRecipeInputSchemaObject } from './IngredientCreateWithoutRecipeInput.schema.js.js';
import { IngredientUncheckedCreateWithoutRecipeInputSchemaObject } from './IngredientUncheckedCreateWithoutRecipeInput.schema.js.js';
import { IngredientCreateOrConnectWithoutRecipeInputSchemaObject } from './IngredientCreateOrConnectWithoutRecipeInput.schema.js.js';
import { IngredientWhereUniqueInputSchemaObject } from './IngredientWhereUniqueInput.schema.js.js'

export const IngredientCreateNestedOneWithoutRecipeInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(IngredientCreateWithoutRecipeInputSchemaObject),
Joi.object().keys(IngredientUncheckedCreateWithoutRecipeInputSchemaObject)),
  connectOrCreate: Joi.object().keys(IngredientCreateOrConnectWithoutRecipeInputSchemaObject),
  connect: Joi.object().keys(IngredientWhereUniqueInputSchemaObject)
}