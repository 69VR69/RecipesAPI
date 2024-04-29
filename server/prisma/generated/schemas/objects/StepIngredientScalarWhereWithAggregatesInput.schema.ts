// @ts-nocheck
import Joi from 'joi';
import { IntWithAggregatesFilterSchemaObject } from './IntWithAggregatesFilter.schema'

export const StepIngredientScalarWhereWithAggregatesInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#StepIngredientScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#StepIngredientScalarWhereWithAggregatesInput'))),
  OR: Joi.array().items(Joi.link('#StepIngredientScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(Joi.link('#StepIngredientScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#StepIngredientScalarWhereWithAggregatesInput'))),
  ingredient: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject),
Joi.number()),
  step: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject),
Joi.number()),
  number: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject),
Joi.number())
}