// @ts-nocheck
import Joi from 'joi';
import { RecipeIngredientWhereUniqueInputSchemaObject } from './RecipeIngredientWhereUniqueInput.schema';
import { RecipeIngredientUpdateWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientUpdateWithoutIngredientRelationInput.schema';
import { RecipeIngredientUncheckedUpdateWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientUncheckedUpdateWithoutIngredientRelationInput.schema';
import { RecipeIngredientCreateWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientCreateWithoutIngredientRelationInput.schema';
import { RecipeIngredientUncheckedCreateWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientUncheckedCreateWithoutIngredientRelationInput.schema'

export const RecipeIngredientUpsertWithWhereUniqueWithoutIngredientRelationInputSchemaObject = {
    where: Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(RecipeIngredientUpdateWithoutIngredientRelationInputSchemaObject),
Joi.object().keys(RecipeIngredientUncheckedUpdateWithoutIngredientRelationInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(RecipeIngredientCreateWithoutIngredientRelationInputSchemaObject),
Joi.object().keys(RecipeIngredientUncheckedCreateWithoutIngredientRelationInputSchemaObject))
}