// @ts-nocheck
import Joi from 'joi';
import { RecipeIngredientScalarWhereInputSchemaObject } from './RecipeIngredientScalarWhereInput.schema';
import { RecipeIngredientUpdateManyMutationInputSchemaObject } from './RecipeIngredientUpdateManyMutationInput.schema';
import { RecipeIngredientUncheckedUpdateManyWithoutRecipeInputSchemaObject } from './RecipeIngredientUncheckedUpdateManyWithoutRecipeInput.schema'

export const RecipeIngredientUpdateManyWithWhereWithoutIngredientRelationInputSchemaObject = {
    where: Joi.object().keys(RecipeIngredientScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(RecipeIngredientUpdateManyMutationInputSchemaObject),
Joi.object().keys(RecipeIngredientUncheckedUpdateManyWithoutRecipeInputSchemaObject))
}