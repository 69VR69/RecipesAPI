import Joi from 'joi';
import { RecipeIngredientWhereInputSchemaObject, RecipeIngredientOrderByWithRelationInputSchemaObject, RecipeIngredientWhereUniqueInputSchemaObject } from './objects/index.js/index.js';
import { RecipeIngredientScalarFieldEnumSchema } from './enums/index.js/index.js'

export const RecipeIngredientFindFirstSchema = Joi.object().keys({ where: Joi.object().keys(RecipeIngredientWhereInputSchemaObject), orderBy: Joi.object().keys(RecipeIngredientOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(RecipeIngredientScalarFieldEnumSchema) }).required()