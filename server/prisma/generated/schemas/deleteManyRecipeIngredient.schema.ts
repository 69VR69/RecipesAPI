import Joi from 'joi';
import { RecipeIngredientWhereInputSchemaObject } from './objects'

export const RecipeIngredientDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(RecipeIngredientWhereInputSchemaObject)  }).required()