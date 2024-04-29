import Joi from 'joi';
import { StepIngredientWhereInputSchemaObject, StepIngredientOrderByWithAggregationInputSchemaObject, StepIngredientScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { StepIngredientScalarFieldEnumSchema } from './enums'

export const StepIngredientGroupBySchema = Joi.object().keys({ where: Joi.object().keys(StepIngredientWhereInputSchemaObject), orderBy: Joi.object().keys(StepIngredientOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(StepIngredientScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(StepIngredientScalarFieldEnumSchema).required()  }).required()