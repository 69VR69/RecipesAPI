// @ts-nocheck
import Joi from 'joi';
import { IntWithAggregatesFilterSchemaObject } from './IntWithAggregatesFilter.schema.js';
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema.js'

export const IngredientScalarWhereWithAggregatesInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#IngredientScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#IngredientScalarWhereWithAggregatesInput'))),
  OR: Joi.array().items(Joi.link('#IngredientScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(Joi.link('#IngredientScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#IngredientScalarWhereWithAggregatesInput'))),
  id: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject),
Joi.number()),
  name: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  category: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  season: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject),
Joi.number())
}