// @ts-nocheck
import Joi from 'joi';
import { RecipeIngredientScalarWhereInputSchemaObject } from './RecipeIngredientScalarWhereInput.schema.js.js';
import { RecipeIngredientUpdateManyMutationInputSchemaObject } from './RecipeIngredientUpdateManyMutationInput.schema.js.js';
import { RecipeIngredientUncheckedUpdateManyWithoutIngredientInputSchemaObject } from './RecipeIngredientUncheckedUpdateManyWithoutIngredientInput.schema.js.js'

export const RecipeIngredientUpdateManyWithWhereWithoutReciepRelationInputSchemaObject = {
    where: Joi.object().keys(RecipeIngredientScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(RecipeIngredientUpdateManyMutationInputSchemaObject),
Joi.object().keys(RecipeIngredientUncheckedUpdateManyWithoutIngredientInputSchemaObject))
}