import Joi from 'joi';
import { SeasonWhereUniqueInputSchemaObject, SeasonCreateInputSchemaObject, SeasonUpdateInputSchemaObject } from './objects/index.js'

export const SeasonUpsertSchema = Joi.object().keys({ where: Joi.object().keys(SeasonWhereUniqueInputSchemaObject), data: Joi.object().keys(SeasonCreateInputSchemaObject), update: Joi.object().keys(SeasonUpdateInputSchemaObject)  }).required()