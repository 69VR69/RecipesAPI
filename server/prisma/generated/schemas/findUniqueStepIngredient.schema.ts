import Joi from 'joi';
import { StepIngredientWhereUniqueInputSchemaObject } from './objects'

export const StepIngredientFindUniqueSchema = Joi.object().keys({ where: Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject) }).required()