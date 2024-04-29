// @ts-nocheck
import Joi from 'joi';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { RecipeIngredientListRelationFilterSchemaObject } from './RecipeIngredientListRelationFilter.schema';
import { StepIngredientListRelationFilterSchemaObject } from './StepIngredientListRelationFilter.schema'

export const IngredientWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#IngredientWhereInput'),
Joi.array().items(Joi.link('#IngredientWhereInput'))),
  OR: Joi.array().items(Joi.link('#IngredientWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#IngredientWhereInput'),
Joi.array().items(Joi.link('#IngredientWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  name: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  category: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  season: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  recipe: Joi.object().keys(RecipeIngredientListRelationFilterSchemaObject),
  step: Joi.object().keys(StepIngredientListRelationFilterSchemaObject)
}