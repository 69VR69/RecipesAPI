import Joi from 'joi';
import { StepIngredientWhereInputSchemaObject } from './objects'

export const StepIngredientDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(StepIngredientWhereInputSchemaObject)  }).required()