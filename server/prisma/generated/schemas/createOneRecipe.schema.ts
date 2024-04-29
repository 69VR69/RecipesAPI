import Joi from 'joi';
import { RecipeCreateInputSchemaObject } from './objects/index.js'

export const RecipeCreateSchema = Joi.object().keys({ data: Joi.object().keys(RecipeCreateInputSchemaObject)  }).required()