// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema.js';
import { RecipeIngredientOrderByRelationAggregateInputSchemaObject } from './RecipeIngredientOrderByRelationAggregateInput.schema.js';
import { StepOrderByRelationAggregateInputSchemaObject } from './StepOrderByRelationAggregateInput.schema.js'

export const RecipeOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  name: SortOrderSchema,
  ingredient: Joi.object().keys(RecipeIngredientOrderByRelationAggregateInputSchemaObject),
  step: Joi.object().keys(StepOrderByRelationAggregateInputSchemaObject)
}