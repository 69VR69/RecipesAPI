import Joi from 'joi';
import { StepIngredientWhereInputSchemaObject, StepIngredientOrderByWithRelationInputSchemaObject, StepIngredientWhereUniqueInputSchemaObject } from './objects'

export const StepIngredientAggregateSchema = Joi.object().keys({ where: Joi.object().keys(StepIngredientWhereInputSchemaObject), orderBy: Joi.object().keys(StepIngredientOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number()  }).required()