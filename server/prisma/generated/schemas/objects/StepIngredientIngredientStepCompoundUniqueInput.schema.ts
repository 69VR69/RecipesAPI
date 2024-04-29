// @ts-nocheck
import Joi from 'joi';


export const StepIngredientIngredientStepCompoundUniqueInputSchemaObject = {
    ingredient: Joi.number().required(),
  step: Joi.number().required()
}