import Joi from 'joi';
import { RecipeIngredientUpdateManyMutationInputSchemaObject, RecipeIngredientWhereInputSchemaObject } from './objects/index.js/index.js'

export const RecipeIngredientUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(RecipeIngredientUpdateManyMutationInputSchemaObject), where: Joi.object().keys(RecipeIngredientWhereInputSchemaObject)  }).required()