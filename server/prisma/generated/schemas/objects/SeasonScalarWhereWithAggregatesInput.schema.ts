// @ts-nocheck
import Joi from 'joi';
import { IntWithAggregatesFilterSchemaObject } from './IntWithAggregatesFilter.schema.js';
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema.js'

export const SeasonScalarWhereWithAggregatesInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#SeasonScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#SeasonScalarWhereWithAggregatesInput'))),
  OR: Joi.array().items(Joi.link('#SeasonScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(Joi.link('#SeasonScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#SeasonScalarWhereWithAggregatesInput'))),
  id: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject),
Joi.number()),
  label: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string())
}