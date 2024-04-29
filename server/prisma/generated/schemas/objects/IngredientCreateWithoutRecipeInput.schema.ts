// @ts-nocheck
import Joi from 'joi';
import { StepIngredientCreateNestedManyWithoutIngredientRelationInputSchemaObject } from './StepIngredientCreateNestedManyWithoutIngredientRelationInput.schema'

export const IngredientCreateWithoutRecipeInputSchemaObject = {
    name: Joi.string().required(),
  category: Joi.string().required(),
  season: Joi.number().required(),
  step: Joi.object().keys(StepIngredientCreateNestedManyWithoutIngredientRelationInputSchemaObject)
}