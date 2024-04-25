import Joi from 'joi';
import { IngredientWhereInputSchemaObject } from './objects'

export const IngredientDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(IngredientWhereInputSchemaObject)  }).required()