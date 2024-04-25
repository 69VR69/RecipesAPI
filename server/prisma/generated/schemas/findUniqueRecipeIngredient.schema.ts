import Joi from 'joi';
import { RecipeIngredientWhereUniqueInputSchemaObject } from './objects'

export const RecipeIngredientFindUniqueSchema = Joi.object().keys({ where: Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject) }).required()