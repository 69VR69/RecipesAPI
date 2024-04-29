// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema.js';
import { RecipeIngredientOrderByRelationAggregateInputSchemaObject } from './RecipeIngredientOrderByRelationAggregateInput.schema.js';
import { StepIngredientOrderByRelationAggregateInputSchemaObject } from './StepIngredientOrderByRelationAggregateInput.schema.js'

export const IngredientOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  name: SortOrderSchema,
  category: SortOrderSchema,
  season: SortOrderSchema,
  recipe: Joi.object().keys(RecipeIngredientOrderByRelationAggregateInputSchemaObject),
  step: Joi.object().keys(StepIngredientOrderByRelationAggregateInputSchemaObject)
}