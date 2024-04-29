// @ts-nocheck
import Joi from 'joi';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { StepRelationFilterSchemaObject } from './StepRelationFilter.schema';
import { StepWhereInputSchemaObject } from './StepWhereInput.schema';
import { IngredientRelationFilterSchemaObject } from './IngredientRelationFilter.schema';
import { IngredientWhereInputSchemaObject } from './IngredientWhereInput.schema'

export const StepIngredientWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#StepIngredientWhereInput'),
Joi.array().items(Joi.link('#StepIngredientWhereInput'))),
  OR: Joi.array().items(Joi.link('#StepIngredientWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#StepIngredientWhereInput'),
Joi.array().items(Joi.link('#StepIngredientWhereInput'))),
  ingredient: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  step: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  number: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  stepRelation: Joi.alternatives().try(Joi.object().keys(StepRelationFilterSchemaObject),
Joi.object().keys(StepWhereInputSchemaObject)),
  ingredientRelation: Joi.alternatives().try(Joi.object().keys(IngredientRelationFilterSchemaObject),
Joi.object().keys(IngredientWhereInputSchemaObject))
}