import Joi from 'joi';
import { RecipeIngredientCreateInputSchemaObject } from './objects/index.js'

export const RecipeIngredientCreateSchema = Joi.object().keys({ data: Joi.object().keys(RecipeIngredientCreateInputSchemaObject)  }).required()