import Joi from 'joi';
import { RecipeWhereUniqueInputSchemaObject } from './objects/index.js/index.js'

export const RecipeDeleteOneSchema = Joi.object().keys({ where: Joi.object().keys(RecipeWhereUniqueInputSchemaObject)  }).required()