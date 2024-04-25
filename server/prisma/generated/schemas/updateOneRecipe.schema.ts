import Joi from 'joi';
import { RecipeUpdateInputSchemaObject, RecipeWhereUniqueInputSchemaObject } from './objects'

export const RecipeUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(RecipeUpdateInputSchemaObject), where: Joi.object().keys(RecipeWhereUniqueInputSchemaObject)  }).required()