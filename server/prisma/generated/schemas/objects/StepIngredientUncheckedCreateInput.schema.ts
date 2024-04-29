// @ts-nocheck
import Joi from 'joi';


export const StepIngredientUncheckedCreateInputSchemaObject = {
    ingredient: Joi.number().required(),
  step: Joi.number().required(),
  number: Joi.number().required()
}