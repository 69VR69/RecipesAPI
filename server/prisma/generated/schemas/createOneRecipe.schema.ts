import Joi from 'joi';
import { RecipeCreateInputSchemaObject } from './objects'

export const RecipeCreateSchema = Joi.object().keys({ data: Joi.object().keys(RecipeCreateInputSchemaObject)  }).required()