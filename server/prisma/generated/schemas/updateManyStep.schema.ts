import Joi from 'joi';
import { StepUpdateManyMutationInputSchemaObject, StepWhereInputSchemaObject } from './objects'

export const StepUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(StepUpdateManyMutationInputSchemaObject), where: Joi.object().keys(StepWhereInputSchemaObject)  }).required()