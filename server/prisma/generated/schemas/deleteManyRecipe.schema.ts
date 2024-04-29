import Joi from 'joi';
import { RecipeWhereInputSchemaObject } from './objects/index.js/index.js'

export const RecipeDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(RecipeWhereInputSchemaObject)  }).required()