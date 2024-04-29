import Joi from 'joi';
import { StepWhereInputSchemaObject, StepOrderByWithRelationInputSchemaObject, StepWhereUniqueInputSchemaObject } from './objects';
import { StepScalarFieldEnumSchema } from './enums'

export const StepFindFirstSchema = Joi.object().keys({ where: Joi.object().keys(StepWhereInputSchemaObject), orderBy: Joi.object().keys(StepOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(StepWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(StepScalarFieldEnumSchema) }).required()