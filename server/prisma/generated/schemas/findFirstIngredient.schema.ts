import Joi from 'joi';
import { IngredientWhereInputSchemaObject, IngredientOrderByWithRelationInputSchemaObject, IngredientWhereUniqueInputSchemaObject } from './objects';
import { IngredientScalarFieldEnumSchema } from './enums'

export const IngredientFindFirstSchema = Joi.object().keys({ where: Joi.object().keys(IngredientWhereInputSchemaObject), orderBy: Joi.object().keys(IngredientOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(IngredientWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(IngredientScalarFieldEnumSchema) }).required()