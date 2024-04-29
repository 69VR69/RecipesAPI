import Joi from 'joi';
import { IngredientWhereInputSchemaObject } from './objects/index.js/index.js'

export const IngredientDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(IngredientWhereInputSchemaObject)  }).required()