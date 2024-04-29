import Joi from 'joi';
import { SeasonWhereInputSchemaObject, SeasonOrderByWithAggregationInputSchemaObject, SeasonScalarWhereWithAggregatesInputSchemaObject } from './objects/index.js';
import { SeasonScalarFieldEnumSchema } from './enums/index.js'

export const SeasonGroupBySchema = Joi.object().keys({ where: Joi.object().keys(SeasonWhereInputSchemaObject), orderBy: Joi.object().keys(SeasonOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(SeasonScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(SeasonScalarFieldEnumSchema).required()  }).required()