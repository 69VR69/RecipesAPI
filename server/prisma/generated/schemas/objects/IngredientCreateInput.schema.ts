// @ts-nocheck
import Joi from 'joi';
import { RecipeIngredientCreateNestedManyWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientCreateNestedManyWithoutIngredientRelationInput.schema.js';
import { StepIngredientCreateNestedManyWithoutIngredientRelationInputSchemaObject } from './StepIngredientCreateNestedManyWithoutIngredientRelationInput.schema.js';
import { SeasonCreateNestedOneWithoutIngredientInputSchemaObject } from './SeasonCreateNestedOneWithoutIngredientInput.schema.js'

export const IngredientCreateInputSchemaObject = {
    name: Joi.string().required(),
  category: Joi.string().required(),
  recipe: Joi.object().keys(RecipeIngredientCreateNestedManyWithoutIngredientRelationInputSchemaObject),
  step: Joi.object().keys(StepIngredientCreateNestedManyWithoutIngredientRelationInputSchemaObject),
  seasonRelation: Joi.object().keys(SeasonCreateNestedOneWithoutIngredientInputSchemaObject)
}