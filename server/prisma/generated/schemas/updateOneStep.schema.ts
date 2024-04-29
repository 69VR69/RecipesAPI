import Joi from 'joi';
import { StepUpdateInputSchemaObject, StepWhereUniqueInputSchemaObject } from './objects'

export const StepUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(StepUpdateInputSchemaObject), where: Joi.object().keys(StepWhereUniqueInputSchemaObject)  }).required()