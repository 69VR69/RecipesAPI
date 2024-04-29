import Joi from 'joi';
import { SeasonWhereInputSchemaObject, SeasonOrderByWithRelationInputSchemaObject, SeasonWhereUniqueInputSchemaObject } from './objects/index.js';
import { SeasonScalarFieldEnumSchema } from './enums/index.js'

export const SeasonFindFirstSchema = Joi.object().keys({ where: Joi.object().keys(SeasonWhereInputSchemaObject), orderBy: Joi.object().keys(SeasonOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(SeasonWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(SeasonScalarFieldEnumSchema) }).required()