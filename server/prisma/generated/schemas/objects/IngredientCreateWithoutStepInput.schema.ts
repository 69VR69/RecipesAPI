// @ts-nocheck
import Joi from 'joi';
import { RecipeIngredientCreateNestedManyWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientCreateNestedManyWithoutIngredientRelationInput.schema.js';
import { SeasonCreateNestedOneWithoutIngredientInputSchemaObject } from './SeasonCreateNestedOneWithoutIngredientInput.schema.js'

export const IngredientCreateWithoutStepInputSchemaObject = {
    name: Joi.string().required(),
  category: Joi.string().required(),
  recipe: Joi.object().keys(RecipeIngredientCreateNestedManyWithoutIngredientRelationInputSchemaObject),
  seasonRelation: Joi.object().keys(SeasonCreateNestedOneWithoutIngredientInputSchemaObject)
}