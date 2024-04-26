import Joi from 'joi';
import { RecipeWhereUniqueInputSchemaObject, RecipeCreateInputSchemaObject, RecipeUpdateInputSchemaObject } from './objects'

export const RecipeUpsertSchema = Joi.object().keys({ where: Joi.object().keys(RecipeWhereUniqueInputSchemaObject), data: Joi.object().keys(RecipeCreateInputSchemaObject), update: Joi.object().keys(RecipeUpdateInputSchemaObject)  }).required()