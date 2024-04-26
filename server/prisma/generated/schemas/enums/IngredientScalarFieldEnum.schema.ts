import Joi from 'joi';

export const IngredientScalarFieldEnumSchema = Joi.string().valid(...["id","name","category","season"])