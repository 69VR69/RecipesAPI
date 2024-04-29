import Joi from 'joi';
import { StepIngredientUpdateInputSchemaObject, StepIngredientWhereUniqueInputSchemaObject } from './objects'

export const StepIngredientUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(StepIngredientUpdateInputSchemaObject), where: Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject)  }).required()