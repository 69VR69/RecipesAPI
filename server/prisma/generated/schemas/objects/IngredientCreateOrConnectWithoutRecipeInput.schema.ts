// @ts-nocheck
import Joi from 'joi';
import { IngredientWhereUniqueInputSchemaObject } from './IngredientWhereUniqueInput.schema.js';
import { IngredientCreateWithoutRecipeInputSchemaObject } from './IngredientCreateWithoutRecipeInput.schema.js';
import { IngredientUncheckedCreateWithoutRecipeInputSchemaObject } from './IngredientUncheckedCreateWithoutRecipeInput.schema.js'

export const IngredientCreateOrConnectWithoutRecipeInputSchemaObject = {
    where: Joi.object().keys(IngredientWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(IngredientCreateWithoutRecipeInputSchemaObject),
Joi.object().keys(IngredientUncheckedCreateWithoutRecipeInputSchemaObject))
}