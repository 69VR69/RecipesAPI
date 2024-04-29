// @ts-nocheck
import Joi from 'joi';
import { RecipeIngredientWhereUniqueInputSchemaObject } from './RecipeIngredientWhereUniqueInput.schema.js';
import { RecipeIngredientUpdateWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientUpdateWithoutIngredientRelationInput.schema.js';
import { RecipeIngredientUncheckedUpdateWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientUncheckedUpdateWithoutIngredientRelationInput.schema.js';
import { RecipeIngredientCreateWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientCreateWithoutIngredientRelationInput.schema.js';
import { RecipeIngredientUncheckedCreateWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientUncheckedCreateWithoutIngredientRelationInput.schema.js'

export const RecipeIngredientUpsertWithWhereUniqueWithoutIngredientRelationInputSchemaObject = {
    where: Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(RecipeIngredientUpdateWithoutIngredientRelationInputSchemaObject),
Joi.object().keys(RecipeIngredientUncheckedUpdateWithoutIngredientRelationInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(RecipeIngredientCreateWithoutIngredientRelationInputSchemaObject),
Joi.object().keys(RecipeIngredientUncheckedCreateWithoutIngredientRelationInputSchemaObject))
}