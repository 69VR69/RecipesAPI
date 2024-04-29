import Joi from 'joi';
import { StepIngredientCreateInputSchemaObject } from './objects'

export const StepIngredientCreateSchema = Joi.object().keys({ data: Joi.object().keys(StepIngredientCreateInputSchemaObject)  }).required()