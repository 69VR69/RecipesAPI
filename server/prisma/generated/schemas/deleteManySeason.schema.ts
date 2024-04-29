import Joi from 'joi';
import { SeasonWhereInputSchemaObject } from './objects/index.js'

export const SeasonDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(SeasonWhereInputSchemaObject)  }).required()