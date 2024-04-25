import Joi from 'joi';
import { RecipeIngredientUpdateInputSchemaObject, RecipeIngredientWhereUniqueInputSchemaObject } from './objects'

export const RecipeIngredientUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(RecipeIngredientUpdateInputSchemaObject), where: Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject)  }).required()