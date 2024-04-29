import Joi from 'joi';
import { StepIngredientWhereInputSchemaObject } from './objects/index.js'

export const StepIngredientDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(StepIngredientWhereInputSchemaObject)  }).required()