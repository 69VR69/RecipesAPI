// @ts-nocheck
import Joi from 'joi';
import { RecipeIngredientWhereUniqueInputSchemaObject } from './RecipeIngredientWhereUniqueInput.schema';
import { RecipeIngredientUpdateWithoutReciepRelationInputSchemaObject } from './RecipeIngredientUpdateWithoutReciepRelationInput.schema';
import { RecipeIngredientUncheckedUpdateWithoutReciepRelationInputSchemaObject } from './RecipeIngredientUncheckedUpdateWithoutReciepRelationInput.schema';
import { RecipeIngredientCreateWithoutReciepRelationInputSchemaObject } from './RecipeIngredientCreateWithoutReciepRelationInput.schema';
import { RecipeIngredientUncheckedCreateWithoutReciepRelationInputSchemaObject } from './RecipeIngredientUncheckedCreateWithoutReciepRelationInput.schema'

export const RecipeIngredientUpsertWithWhereUniqueWithoutReciepRelationInputSchemaObject = {
    where: Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(RecipeIngredientUpdateWithoutReciepRelationInputSchemaObject),
Joi.object().keys(RecipeIngredientUncheckedUpdateWithoutReciepRelationInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(RecipeIngredientCreateWithoutReciepRelationInputSchemaObject),
Joi.object().keys(RecipeIngredientUncheckedCreateWithoutReciepRelationInputSchemaObject))
}