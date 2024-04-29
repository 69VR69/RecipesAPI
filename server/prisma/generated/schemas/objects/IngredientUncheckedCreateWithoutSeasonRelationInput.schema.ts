// @ts-nocheck
import Joi from 'joi';
import { RecipeIngredientUncheckedCreateNestedManyWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientUncheckedCreateNestedManyWithoutIngredientRelationInput.schema.js';
import { StepIngredientUncheckedCreateNestedManyWithoutIngredientRelationInputSchemaObject } from './StepIngredientUncheckedCreateNestedManyWithoutIngredientRelationInput.schema.js'

export const IngredientUncheckedCreateWithoutSeasonRelationInputSchemaObject = {
    id: Joi.number(),
  name: Joi.string().required(),
  category: Joi.string().required(),
  recipe: Joi.object().keys(RecipeIngredientUncheckedCreateNestedManyWithoutIngredientRelationInputSchemaObject),
  step: Joi.object().keys(StepIngredientUncheckedCreateNestedManyWithoutIngredientRelationInputSchemaObject)
}