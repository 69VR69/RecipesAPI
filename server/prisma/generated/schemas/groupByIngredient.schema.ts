import Joi from 'joi';
import { IngredientWhereInputSchemaObject, IngredientOrderByWithAggregationInputSchemaObject, IngredientScalarWhereWithAggregatesInputSchemaObject } from './objects/index.js';
import { IngredientScalarFieldEnumSchema } from './enums/index.js'

export const IngredientGroupBySchema = Joi.object().keys({ where: Joi.object().keys(IngredientWhereInputSchemaObject), orderBy: Joi.object().keys(IngredientOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(IngredientScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(IngredientScalarFieldEnumSchema).required()  }).required()