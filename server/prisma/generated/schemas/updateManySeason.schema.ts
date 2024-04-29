import Joi from 'joi';
import { SeasonUpdateManyMutationInputSchemaObject, SeasonWhereInputSchemaObject } from './objects/index.js'

export const SeasonUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(SeasonUpdateManyMutationInputSchemaObject), where: Joi.object().keys(SeasonWhereInputSchemaObject)  }).required()