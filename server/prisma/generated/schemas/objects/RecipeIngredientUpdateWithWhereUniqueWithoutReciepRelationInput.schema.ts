// @ts-nocheck
import Joi from 'joi';
import { RecipeIngredientWhereUniqueInputSchemaObject } from './RecipeIngredientWhereUniqueInput.schema';
import { RecipeIngredientUpdateWithoutReciepRelationInputSchemaObject } from './RecipeIngredientUpdateWithoutReciepRelationInput.schema';
import { RecipeIngredientUncheckedUpdateWithoutReciepRelationInputSchemaObject } from './RecipeIngredientUncheckedUpdateWithoutReciepRelationInput.schema'

export const RecipeIngredientUpdateWithWhereUniqueWithoutReciepRelationInputSchemaObject = {
    where: Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(RecipeIngredientUpdateWithoutReciepRelationInputSchemaObject),
Joi.object().keys(RecipeIngredientUncheckedUpdateWithoutReciepRelationInputSchemaObject))
}