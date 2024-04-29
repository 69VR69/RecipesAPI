// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema.js';
import { RecipeOrderByWithRelationInputSchemaObject } from './RecipeOrderByWithRelationInput.schema.js';
import { StepIngredientOrderByRelationAggregateInputSchemaObject } from './StepIngredientOrderByRelationAggregateInput.schema.js'

export const StepOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  description: SortOrderSchema,
  recipeId: SortOrderSchema,
  recipe: Joi.object().keys(RecipeOrderByWithRelationInputSchemaObject),
  ingredient: Joi.object().keys(StepIngredientOrderByRelationAggregateInputSchemaObject)
}