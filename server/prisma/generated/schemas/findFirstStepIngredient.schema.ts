import Joi from 'joi';
import { StepIngredientWhereInputSchemaObject, StepIngredientOrderByWithRelationInputSchemaObject, StepIngredientWhereUniqueInputSchemaObject } from './objects/index.js';
import { StepIngredientScalarFieldEnumSchema } from './enums/index.js'

export const StepIngredientFindFirstSchema = Joi.object().keys({ where: Joi.object().keys(StepIngredientWhereInputSchemaObject), orderBy: Joi.object().keys(StepIngredientOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(StepIngredientScalarFieldEnumSchema) }).required()