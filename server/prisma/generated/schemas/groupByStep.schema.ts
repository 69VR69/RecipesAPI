import Joi from 'joi';
import { StepWhereInputSchemaObject, StepOrderByWithAggregationInputSchemaObject, StepScalarWhereWithAggregatesInputSchemaObject } from './objects/index.js';
import { StepScalarFieldEnumSchema } from './enums/index.js'

export const StepGroupBySchema = Joi.object().keys({ where: Joi.object().keys(StepWhereInputSchemaObject), orderBy: Joi.object().keys(StepOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(StepScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(StepScalarFieldEnumSchema).required()  }).required()