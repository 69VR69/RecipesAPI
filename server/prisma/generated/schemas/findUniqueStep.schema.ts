import Joi from 'joi';
import { StepWhereUniqueInputSchemaObject } from './objects/index.js'

export const StepFindUniqueSchema = Joi.object().keys({ where: Joi.object().keys(StepWhereUniqueInputSchemaObject) }).required()