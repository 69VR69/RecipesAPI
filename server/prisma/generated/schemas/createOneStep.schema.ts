import Joi from 'joi';
import { StepCreateInputSchemaObject } from './objects/index.js'

export const StepCreateSchema = Joi.object().keys({ data: Joi.object().keys(StepCreateInputSchemaObject)  }).required()