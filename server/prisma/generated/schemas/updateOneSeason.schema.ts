import Joi from 'joi';
import { SeasonUpdateInputSchemaObject, SeasonWhereUniqueInputSchemaObject } from './objects/index.js'

export const SeasonUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(SeasonUpdateInputSchemaObject), where: Joi.object().keys(SeasonWhereUniqueInputSchemaObject)  }).required()