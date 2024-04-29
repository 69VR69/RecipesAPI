import Joi from 'joi';

export const StepIngredientScalarFieldEnumSchema = Joi.string().valid(...["ingredient","step","number"])