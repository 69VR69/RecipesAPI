import Joi from 'joi';
import { IngredientWhereUniqueInputSchemaObject } from './objects'

export const IngredientFindUniqueSchema = Joi.object().keys({ where: Joi.object().keys(IngredientWhereUniqueInputSchemaObject) }).required()