import Joi from 'joi';
import { StepIngredientWhereUniqueInputSchemaObject, StepIngredientCreateInputSchemaObject, StepIngredientUpdateInputSchemaObject } from './objects'

export const StepIngredientUpsertSchema = Joi.object().keys({ where: Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject), data: Joi.object().keys(StepIngredientCreateInputSchemaObject), update: Joi.object().keys(StepIngredientUpdateInputSchemaObject)  }).required()