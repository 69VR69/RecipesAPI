// @ts-nocheck
import Joi from 'joi';
import { IntFilterSchemaObject } from './IntFilter.schema.js';
import { RecipeRelationFilterSchemaObject } from './RecipeRelationFilter.schema.js';
import { RecipeWhereInputSchemaObject } from './RecipeWhereInput.schema.js';
import { IngredientRelationFilterSchemaObject } from './IngredientRelationFilter.schema.js';
import { IngredientWhereInputSchemaObject } from './IngredientWhereInput.schema.js'

export const RecipeIngredientWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#RecipeIngredientWhereInput'),
Joi.array().items(Joi.link('#RecipeIngredientWhereInput'))),
  OR: Joi.array().items(Joi.link('#RecipeIngredientWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#RecipeIngredientWhereInput'),
Joi.array().items(Joi.link('#RecipeIngredientWhereInput'))),
  ingredient: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  recipe: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  number: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  reciepRelation: Joi.alternatives().try(Joi.object().keys(RecipeRelationFilterSchemaObject),
Joi.object().keys(RecipeWhereInputSchemaObject)),
  ingredientRelation: Joi.alternatives().try(Joi.object().keys(IngredientRelationFilterSchemaObject),
Joi.object().keys(IngredientWhereInputSchemaObject))
}