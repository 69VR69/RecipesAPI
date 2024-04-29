import Joi from 'joi';
import { StepWhereUniqueInputSchemaObject, StepCreateInputSchemaObject, StepUpdateInputSchemaObject } from './objects/index.js'

export const StepUpsertSchema = Joi.object().keys({ where: Joi.object().keys(StepWhereUniqueInputSchemaObject), data: Joi.object().keys(StepCreateInputSchemaObject), update: Joi.object().keys(StepUpdateInputSchemaObject)  }).required()