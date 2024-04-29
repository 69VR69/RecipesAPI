import Joi from 'joi';
import { StepIngredientUpdateInputSchemaObject, StepIngredientWhereUniqueInputSchemaObject } from './objects/index.js'

export const StepIngredientUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(StepIngredientUpdateInputSchemaObject), where: Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject)  }).required()