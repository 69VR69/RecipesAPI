// @ts-nocheck
import Joi from 'joi';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { RecipeRelationFilterSchemaObject } from './RecipeRelationFilter.schema';
import { RecipeWhereInputSchemaObject } from './RecipeWhereInput.schema';
import { StepIngredientListRelationFilterSchemaObject } from './StepIngredientListRelationFilter.schema'

export const StepWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#StepWhereInput'),
Joi.array().items(Joi.link('#StepWhereInput'))),
  OR: Joi.array().items(Joi.link('#StepWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#StepWhereInput'),
Joi.array().items(Joi.link('#StepWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  description: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  recipeId: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  recipe: Joi.alternatives().try(Joi.object().keys(RecipeRelationFilterSchemaObject),
Joi.object().keys(RecipeWhereInputSchemaObject)),
  ingredient: Joi.object().keys(StepIngredientListRelationFilterSchemaObject)
}