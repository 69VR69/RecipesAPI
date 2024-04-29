// @ts-nocheck
import Joi from 'joi';
import { IntWithAggregatesFilterSchemaObject } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema'

export const StepScalarWhereWithAggregatesInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#StepScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#StepScalarWhereWithAggregatesInput'))),
  OR: Joi.array().items(Joi.link('#StepScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(Joi.link('#StepScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#StepScalarWhereWithAggregatesInput'))),
  id: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject),
Joi.number()),
  description: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  recipeId: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject),
Joi.number())
}