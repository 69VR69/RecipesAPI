import Joi from 'joi';

export const RecipeIngredientScalarFieldEnumSchema = Joi.string().valid(...["ingredient","recipe","number"])