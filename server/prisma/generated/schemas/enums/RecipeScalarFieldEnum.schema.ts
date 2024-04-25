import Joi from 'joi';

export const RecipeScalarFieldEnumSchema = Joi.string().valid(...["id","name"])