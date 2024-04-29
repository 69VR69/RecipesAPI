// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema.js';
import { IngredientOrderByRelationAggregateInputSchemaObject } from './IngredientOrderByRelationAggregateInput.schema.js'

export const SeasonOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  label: SortOrderSchema,
  ingredient: Joi.object().keys(IngredientOrderByRelationAggregateInputSchemaObject)
}