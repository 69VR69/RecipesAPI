// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { StepOrderByWithRelationInputSchemaObject } from './StepOrderByWithRelationInput.schema';
import { IngredientOrderByWithRelationInputSchemaObject } from './IngredientOrderByWithRelationInput.schema'

export const StepIngredientOrderByWithRelationInputSchemaObject = {
    ingredient: SortOrderSchema,
  step: SortOrderSchema,
  number: SortOrderSchema,
  stepRelation: Joi.object().keys(StepOrderByWithRelationInputSchemaObject),
  ingredientRelation: Joi.object().keys(IngredientOrderByWithRelationInputSchemaObject)
}