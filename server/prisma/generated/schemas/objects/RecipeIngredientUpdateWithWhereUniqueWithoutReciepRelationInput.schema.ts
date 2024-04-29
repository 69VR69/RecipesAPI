// @ts-nocheck
import Joi from 'joi';
import { RecipeIngredientWhereUniqueInputSchemaObject } from './RecipeIngredientWhereUniqueInput.schema.js';
import { RecipeIngredientUpdateWithoutReciepRelationInputSchemaObject } from './RecipeIngredientUpdateWithoutReciepRelationInput.schema.js';
import { RecipeIngredientUncheckedUpdateWithoutReciepRelationInputSchemaObject } from './RecipeIngredientUncheckedUpdateWithoutReciepRelationInput.schema.js'

export const RecipeIngredientUpdateWithWhereUniqueWithoutReciepRelationInputSchemaObject = {
    where: Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(RecipeIngredientUpdateWithoutReciepRelationInputSchemaObject),
Joi.object().keys(RecipeIngredientUncheckedUpdateWithoutReciepRelationInputSchemaObject))
}