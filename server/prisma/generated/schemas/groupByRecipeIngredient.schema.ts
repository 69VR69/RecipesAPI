import Joi from 'joi';
import { RecipeIngredientWhereInputSchemaObject, RecipeIngredientOrderByWithAggregationInputSchemaObject, RecipeIngredientScalarWhereWithAggregatesInputSchemaObject } from './objects/index.js/index.js';
import { RecipeIngredientScalarFieldEnumSchema } from './enums/index.js/index.js'

export const RecipeIngredientGroupBySchema = Joi.object().keys({ where: Joi.object().keys(RecipeIngredientWhereInputSchemaObject), orderBy: Joi.object().keys(RecipeIngredientOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(RecipeIngredientScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(RecipeIngredientScalarFieldEnumSchema).required()  }).required()