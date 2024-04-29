// @ts-nocheck
import Joi from 'joi';
import { RecipeIngredientScalarWhereInputSchemaObject } from './RecipeIngredientScalarWhereInput.schema.js';
import { RecipeIngredientUpdateManyMutationInputSchemaObject } from './RecipeIngredientUpdateManyMutationInput.schema.js';
import { RecipeIngredientUncheckedUpdateManyWithoutIngredientInputSchemaObject } from './RecipeIngredientUncheckedUpdateManyWithoutIngredientInput.schema.js'

export const RecipeIngredientUpdateManyWithWhereWithoutReciepRelationInputSchemaObject = {
    where: Joi.object().keys(RecipeIngredientScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(RecipeIngredientUpdateManyMutationInputSchemaObject),
Joi.object().keys(RecipeIngredientUncheckedUpdateManyWithoutIngredientInputSchemaObject))
}