import Joi from 'joi';
import { RecipeUpdateManyMutationInputSchemaObject, RecipeWhereInputSchemaObject } from './objects'

export const RecipeUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(RecipeUpdateManyMutationInputSchemaObject), where: Joi.object().keys(RecipeWhereInputSchemaObject)  }).required()