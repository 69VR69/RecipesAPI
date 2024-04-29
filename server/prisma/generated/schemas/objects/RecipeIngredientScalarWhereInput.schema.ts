// @ts-nocheck
import Joi from 'joi';
import { IntFilterSchemaObject } from './IntFilter.schema.js.js'

export const RecipeIngredientScalarWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#RecipeIngredientScalarWhereInput'),
Joi.array().items(Joi.link('#RecipeIngredientScalarWhereInput'))),
  OR: Joi.array().items(Joi.link('#RecipeIngredientScalarWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#RecipeIngredientScalarWhereInput'),
Joi.array().items(Joi.link('#RecipeIngredientScalarWhereInput'))),
  ingredient: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  recipe: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  number: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number())
}