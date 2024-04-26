import Joi from 'joi';
import { IngredientCreateInputSchemaObject } from './objects'

export const IngredientCreateSchema = Joi.object().keys({ data: Joi.object().keys(IngredientCreateInputSchemaObject)  }).required()