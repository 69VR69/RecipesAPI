// @ts-nocheck
import Joi from 'joi';
import { StepIngredientCreateNestedManyWithoutIngredientRelationInputSchemaObject } from './StepIngredientCreateNestedManyWithoutIngredientRelationInput.schema.js';
import { SeasonCreateNestedOneWithoutIngredientInputSchemaObject } from './SeasonCreateNestedOneWithoutIngredientInput.schema.js'

export const IngredientCreateWithoutRecipeInputSchemaObject = {
    name: Joi.string().required(),
  category: Joi.string().required(),
  step: Joi.object().keys(StepIngredientCreateNestedManyWithoutIngredientRelationInputSchemaObject),
  seasonRelation: Joi.object().keys(SeasonCreateNestedOneWithoutIngredientInputSchemaObject)
}