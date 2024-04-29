import Joi from 'joi';
import { IngredientCreateInputSchemaObject } from './objects/index.js'

export const IngredientCreateSchema = Joi.object().keys({ data: Joi.object().keys(IngredientCreateInputSchemaObject)  }).required()