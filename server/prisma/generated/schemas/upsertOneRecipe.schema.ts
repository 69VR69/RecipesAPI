import Joi from 'joi';
import { RecipeWhereUniqueInputSchemaObject, RecipeCreateInputSchemaObject, RecipeUpdateInputSchemaObject } from './objects/index.js/index.js'

export const RecipeUpsertSchema = Joi.object().keys({ where: Joi.object().keys(RecipeWhereUniqueInputSchemaObject), data: Joi.object().keys(RecipeCreateInputSchemaObject), update: Joi.object().keys(RecipeUpdateInputSchemaObject)  }).required()