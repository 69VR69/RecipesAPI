// @ts-nocheck
import Joi from 'joi';
import { IntWithAggregatesFilterSchemaObject } from './IntWithAggregatesFilter.schema.js.js'

export const RecipeIngredientScalarWhereWithAggregatesInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#RecipeIngredientScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#RecipeIngredientScalarWhereWithAggregatesInput'))),
  OR: Joi.array().items(Joi.link('#RecipeIngredientScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(Joi.link('#RecipeIngredientScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#RecipeIngredientScalarWhereWithAggregatesInput'))),
  ingredient: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject),
Joi.number()),
  recipe: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject),
Joi.number()),
  number: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject),
Joi.number())
}