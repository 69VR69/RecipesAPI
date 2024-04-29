import Joi from 'joi';
import { RecipeIngredientWhereUniqueInputSchemaObject, RecipeIngredientCreateInputSchemaObject, RecipeIngredientUpdateInputSchemaObject } from './objects/index.js/index.js'

export const RecipeIngredientUpsertSchema = Joi.object().keys({ where: Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject), data: Joi.object().keys(RecipeIngredientCreateInputSchemaObject), update: Joi.object().keys(RecipeIngredientUpdateInputSchemaObject)  }).required()