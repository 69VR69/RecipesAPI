import Joi from 'joi';
import { IngredientWhereUniqueInputSchemaObject } from './objects/index.js/index.js'

export const IngredientFindUniqueSchema = Joi.object().keys({ where: Joi.object().keys(IngredientWhereUniqueInputSchemaObject) }).required()