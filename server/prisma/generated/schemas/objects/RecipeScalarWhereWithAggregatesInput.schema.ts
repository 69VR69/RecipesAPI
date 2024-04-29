// @ts-nocheck
import Joi from 'joi';
import { IntWithAggregatesFilterSchemaObject } from './IntWithAggregatesFilter.schema.js.js';
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema.js.js'

export const RecipeScalarWhereWithAggregatesInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#RecipeScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#RecipeScalarWhereWithAggregatesInput'))),
  OR: Joi.array().items(Joi.link('#RecipeScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(Joi.link('#RecipeScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#RecipeScalarWhereWithAggregatesInput'))),
  id: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject),
Joi.number()),
  name: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string())
}