import Joi from 'joi';
import { SeasonWhereUniqueInputSchemaObject } from './objects/index.js'

export const SeasonFindUniqueSchema = Joi.object().keys({ where: Joi.object().keys(SeasonWhereUniqueInputSchemaObject) }).required()