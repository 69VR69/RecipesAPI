import Joi from 'joi';
import { StepWhereUniqueInputSchemaObject } from './objects'

export const StepDeleteOneSchema = Joi.object().keys({ where: Joi.object().keys(StepWhereUniqueInputSchemaObject)  }).required()