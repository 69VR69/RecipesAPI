// @ts-nocheck
import Joi from 'joi';
import { RecipeIngredientWhereUniqueInputSchemaObject } from './RecipeIngredientWhereUniqueInput.schema.js';
import { RecipeIngredientUpdateWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientUpdateWithoutIngredientRelationInput.schema.js';
import { RecipeIngredientUncheckedUpdateWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientUncheckedUpdateWithoutIngredientRelationInput.schema.js'

export const RecipeIngredientUpdateWithWhereUniqueWithoutIngredientRelationInputSchemaObject = {
    where: Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(RecipeIngredientUpdateWithoutIngredientRelationInputSchemaObject),
Joi.object().keys(RecipeIngredientUncheckedUpdateWithoutIngredientRelationInputSchemaObject))
}