import Joi from 'joi';
import { StepIngredientUpdateManyMutationInputSchemaObject, StepIngredientWhereInputSchemaObject } from './objects'

export const StepIngredientUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(StepIngredientUpdateManyMutationInputSchemaObject), where: Joi.object().keys(StepIngredientWhereInputSchemaObject)  }).required()