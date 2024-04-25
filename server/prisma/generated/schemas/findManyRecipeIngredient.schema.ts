import Joi from 'joi';
import { RecipeIngredientWhereInputSchemaObject, RecipeIngredientOrderByWithRelationInputSchemaObject, RecipeIngredientWhereUniqueInputSchemaObject } from './objects';
import { RecipeIngredientScalarFieldEnumSchema } from './enums'

export const RecipeIngredientFindManySchema = Joi.object().keys({ where: Joi.object().keys(RecipeIngredientWhereInputSchemaObject), orderBy: Joi.object().keys(RecipeIngredientOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(RecipeIngredientScalarFieldEnumSchema)  }).required()