// @ts-nocheck
import Joi from 'joi';
import { IngredientCreateWithoutRecipeInputSchemaObject } from './IngredientCreateWithoutRecipeInput.schema';
import { IngredientUncheckedCreateWithoutRecipeInputSchemaObject } from './IngredientUncheckedCreateWithoutRecipeInput.schema';
import { IngredientCreateOrConnectWithoutRecipeInputSchemaObject } from './IngredientCreateOrConnectWithoutRecipeInput.schema';
import { IngredientWhereUniqueInputSchemaObject } from './IngredientWhereUniqueInput.schema'

export const IngredientCreateNestedOneWithoutRecipeInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(IngredientCreateWithoutRecipeInputSchemaObject),
Joi.object().keys(IngredientUncheckedCreateWithoutRecipeInputSchemaObject)),
  connectOrCreate: Joi.object().keys(IngredientCreateOrConnectWithoutRecipeInputSchemaObject),
  connect: Joi.object().keys(IngredientWhereUniqueInputSchemaObject)
}