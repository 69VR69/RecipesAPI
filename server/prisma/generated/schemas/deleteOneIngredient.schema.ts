import Joi from 'joi';
import { IngredientWhereUniqueInputSchemaObject } from './objects/index.js/index.js'

export const IngredientDeleteOneSchema = Joi.object().keys({ where: Joi.object().keys(IngredientWhereUniqueInputSchemaObject)  }).required()