import Joi from 'joi';
import { IngredientWhereUniqueInputSchemaObject, IngredientCreateInputSchemaObject, IngredientUpdateInputSchemaObject } from './objects'

export const IngredientUpsertSchema = Joi.object().keys({ where: Joi.object().keys(IngredientWhereUniqueInputSchemaObject), data: Joi.object().keys(IngredientCreateInputSchemaObject), update: Joi.object().keys(IngredientUpdateInputSchemaObject)  }).required()