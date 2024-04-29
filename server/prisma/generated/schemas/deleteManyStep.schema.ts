import Joi from 'joi';
import { StepWhereInputSchemaObject } from './objects/index.js'

export const StepDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(StepWhereInputSchemaObject)  }).required()