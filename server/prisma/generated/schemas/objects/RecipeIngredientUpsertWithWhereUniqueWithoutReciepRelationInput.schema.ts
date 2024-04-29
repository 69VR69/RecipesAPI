// @ts-nocheck
import Joi from 'joi';
import { RecipeIngredientWhereUniqueInputSchemaObject } from './RecipeIngredientWhereUniqueInput.schema.js';
import { RecipeIngredientUpdateWithoutReciepRelationInputSchemaObject } from './RecipeIngredientUpdateWithoutReciepRelationInput.schema.js';
import { RecipeIngredientUncheckedUpdateWithoutReciepRelationInputSchemaObject } from './RecipeIngredientUncheckedUpdateWithoutReciepRelationInput.schema.js';
import { RecipeIngredientCreateWithoutReciepRelationInputSchemaObject } from './RecipeIngredientCreateWithoutReciepRelationInput.schema.js';
import { RecipeIngredientUncheckedCreateWithoutReciepRelationInputSchemaObject } from './RecipeIngredientUncheckedCreateWithoutReciepRelationInput.schema.js'

export const RecipeIngredientUpsertWithWhereUniqueWithoutReciepRelationInputSchemaObject = {
    where: Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(RecipeIngredientUpdateWithoutReciepRelationInputSchemaObject),
Joi.object().keys(RecipeIngredientUncheckedUpdateWithoutReciepRelationInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(RecipeIngredientCreateWithoutReciepRelationInputSchemaObject),
Joi.object().keys(RecipeIngredientUncheckedCreateWithoutReciepRelationInputSchemaObject))
}