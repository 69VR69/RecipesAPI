import Joi from 'joi';
import { RecipeWhereInputSchemaObject } from './objects'

export const RecipeDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(RecipeWhereInputSchemaObject)  }).required()