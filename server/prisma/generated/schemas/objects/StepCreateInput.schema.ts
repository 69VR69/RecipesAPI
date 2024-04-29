// @ts-nocheck
import Joi from 'joi';
import { RecipeCreateNestedOneWithoutStepInputSchemaObject } from './RecipeCreateNestedOneWithoutStepInput.schema';
import { StepIngredientCreateNestedManyWithoutStepRelationInputSchemaObject } from './StepIngredientCreateNestedManyWithoutStepRelationInput.schema'

export const StepCreateInputSchemaObject = {
    description: Joi.string().required(),
  recipe: Joi.object().keys(RecipeCreateNestedOneWithoutStepInputSchemaObject),
  ingredient: Joi.object().keys(StepIngredientCreateNestedManyWithoutStepRelationInputSchemaObject)
}