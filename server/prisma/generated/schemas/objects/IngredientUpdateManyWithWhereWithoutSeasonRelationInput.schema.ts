// @ts-nocheck
import Joi from 'joi';
import { IngredientScalarWhereInputSchemaObject } from './IngredientScalarWhereInput.schema.js';
import { IngredientUpdateManyMutationInputSchemaObject } from './IngredientUpdateManyMutationInput.schema.js';
import { IngredientUncheckedUpdateManyWithoutIngredientInputSchemaObject } from './IngredientUncheckedUpdateManyWithoutIngredientInput.schema.js'

export const IngredientUpdateManyWithWhereWithoutSeasonRelationInputSchemaObject = {
    where: Joi.object().keys(IngredientScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(IngredientUpdateManyMutationInputSchemaObject),
Joi.object().keys(IngredientUncheckedUpdateManyWithoutIngredientInputSchemaObject))
}