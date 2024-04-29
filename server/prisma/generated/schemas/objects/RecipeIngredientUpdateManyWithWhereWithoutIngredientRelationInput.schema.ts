// @ts-nocheck
import Joi from 'joi';
import { RecipeIngredientScalarWhereInputSchemaObject } from './RecipeIngredientScalarWhereInput.schema.js';
import { RecipeIngredientUpdateManyMutationInputSchemaObject } from './RecipeIngredientUpdateManyMutationInput.schema.js';
import { RecipeIngredientUncheckedUpdateManyWithoutRecipeInputSchemaObject } from './RecipeIngredientUncheckedUpdateManyWithoutRecipeInput.schema.js'

export const RecipeIngredientUpdateManyWithWhereWithoutIngredientRelationInputSchemaObject = {
    where: Joi.object().keys(RecipeIngredientScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(RecipeIngredientUpdateManyMutationInputSchemaObject),
Joi.object().keys(RecipeIngredientUncheckedUpdateManyWithoutRecipeInputSchemaObject))
}