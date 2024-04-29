// @ts-nocheck
import Joi from 'joi';
import { RecipeIngredientWhereUniqueInputSchemaObject } from './RecipeIngredientWhereUniqueInput.schema.js';
import { RecipeIngredientCreateWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientCreateWithoutIngredientRelationInput.schema.js';
import { RecipeIngredientUncheckedCreateWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientUncheckedCreateWithoutIngredientRelationInput.schema.js'

export const RecipeIngredientCreateOrConnectWithoutIngredientRelationInputSchemaObject = {
    where: Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(RecipeIngredientCreateWithoutIngredientRelationInputSchemaObject),
Joi.object().keys(RecipeIngredientUncheckedCreateWithoutIngredientRelationInputSchemaObject))
}