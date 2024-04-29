import Joi from 'joi';
import { RecipeIngredientWhereInputSchemaObject } from './objects/index.js/index.js'

export const RecipeIngredientDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(RecipeIngredientWhereInputSchemaObject)  }).required()