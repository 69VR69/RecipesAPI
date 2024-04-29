// @ts-nocheck
import Joi from 'joi';
import { RecipeCreateNestedOneWithoutStepInputSchemaObject } from './RecipeCreateNestedOneWithoutStepInput.schema.js';
import { StepIngredientCreateNestedManyWithoutStepRelationInputSchemaObject } from './StepIngredientCreateNestedManyWithoutStepRelationInput.schema.js'

export const StepCreateInputSchemaObject = {
    description: Joi.string().required(),
  recipe: Joi.object().keys(RecipeCreateNestedOneWithoutStepInputSchemaObject),
  ingredient: Joi.object().keys(StepIngredientCreateNestedManyWithoutStepRelationInputSchemaObject)
}