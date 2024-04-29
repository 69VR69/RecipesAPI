// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema.js';
import { StepOrderByWithRelationInputSchemaObject } from './StepOrderByWithRelationInput.schema.js';
import { IngredientOrderByWithRelationInputSchemaObject } from './IngredientOrderByWithRelationInput.schema.js'

export const StepIngredientOrderByWithRelationInputSchemaObject = {
    ingredient: SortOrderSchema,
  step: SortOrderSchema,
  number: SortOrderSchema,
  stepRelation: Joi.object().keys(StepOrderByWithRelationInputSchemaObject),
  ingredientRelation: Joi.object().keys(IngredientOrderByWithRelationInputSchemaObject)
}