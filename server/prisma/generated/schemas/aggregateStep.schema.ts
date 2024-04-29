import Joi from 'joi';
import { StepWhereInputSchemaObject, StepOrderByWithRelationInputSchemaObject, StepWhereUniqueInputSchemaObject } from './objects'

export const StepAggregateSchema = Joi.object().keys({ where: Joi.object().keys(StepWhereInputSchemaObject), orderBy: Joi.object().keys(StepOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(StepWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number()  }).required()