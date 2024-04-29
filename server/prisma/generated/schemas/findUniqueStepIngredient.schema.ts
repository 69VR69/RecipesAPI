import Joi from 'joi';
import { StepIngredientWhereUniqueInputSchemaObject } from './objects/index.js'

export const StepIngredientFindUniqueSchema = Joi.object().keys({ where: Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject) }).required()