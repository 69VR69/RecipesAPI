// @ts-nocheck
import Joi from 'joi';
import { RecipeIngredientWhereUniqueInputSchemaObject } from './RecipeIngredientWhereUniqueInput.schema';
import { RecipeIngredientUpdateWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientUpdateWithoutIngredientRelationInput.schema';
import { RecipeIngredientUncheckedUpdateWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientUncheckedUpdateWithoutIngredientRelationInput.schema'

export const RecipeIngredientUpdateWithWhereUniqueWithoutIngredientRelationInputSchemaObject = {
    where: Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(RecipeIngredientUpdateWithoutIngredientRelationInputSchemaObject),
Joi.object().keys(RecipeIngredientUncheckedUpdateWithoutIngredientRelationInputSchemaObject))
}