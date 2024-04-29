import Joi from 'joi';
import { IngredientUpdateInputSchemaObject, IngredientWhereUniqueInputSchemaObject } from './objects/index.js/index.js'

export const IngredientUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(IngredientUpdateInputSchemaObject), where: Joi.object().keys(IngredientWhereUniqueInputSchemaObject)  }).required()