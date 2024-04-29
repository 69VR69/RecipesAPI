// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RecipeOrderByWithRelationInputSchemaObject } from './RecipeOrderByWithRelationInput.schema';
import { StepIngredientOrderByRelationAggregateInputSchemaObject } from './StepIngredientOrderByRelationAggregateInput.schema'

export const StepOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  description: SortOrderSchema,
  recipeId: SortOrderSchema,
  recipe: Joi.object().keys(RecipeOrderByWithRelationInputSchemaObject),
  ingredient: Joi.object().keys(StepIngredientOrderByRelationAggregateInputSchemaObject)
}