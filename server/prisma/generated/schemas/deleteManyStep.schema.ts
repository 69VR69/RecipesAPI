import Joi from 'joi';
import { StepWhereInputSchemaObject } from './objects'

export const StepDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(StepWhereInputSchemaObject)  }).required()