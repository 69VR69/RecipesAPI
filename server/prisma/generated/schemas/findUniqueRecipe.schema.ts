import Joi from 'joi';
import { RecipeWhereUniqueInputSchemaObject } from './objects'

export const RecipeFindUniqueSchema = Joi.object().keys({ where: Joi.object().keys(RecipeWhereUniqueInputSchemaObject) }).required()