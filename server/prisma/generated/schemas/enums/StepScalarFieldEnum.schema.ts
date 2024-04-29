import Joi from 'joi';

export const StepScalarFieldEnumSchema = Joi.string().valid(...["id","description","recipeId"])