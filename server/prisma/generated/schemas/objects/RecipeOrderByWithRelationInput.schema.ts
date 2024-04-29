// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RecipeIngredientOrderByRelationAggregateInputSchemaObject } from './RecipeIngredientOrderByRelationAggregateInput.schema';
import { StepOrderByRelationAggregateInputSchemaObject } from './StepOrderByRelationAggregateInput.schema'

export const RecipeOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  name: SortOrderSchema,
  ingredient: Joi.object().keys(RecipeIngredientOrderByRelationAggregateInputSchemaObject),
  step: Joi.object().keys(StepOrderByRelationAggregateInputSchemaObject)
}