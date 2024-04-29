// @ts-nocheck
import Joi from 'joi';


export const StepUncheckedCreateWithoutIngredientInputSchemaObject = {
    id: Joi.number(),
  description: Joi.string().required(),
  recipeId: Joi.number().required()
}