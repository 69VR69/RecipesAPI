import Joi from 'joi';
import { SeasonCreateInputSchemaObject } from './objects/index.js'

export const SeasonCreateSchema = Joi.object().keys({ data: Joi.object().keys(SeasonCreateInputSchemaObject)  }).required()