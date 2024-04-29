import Joi from 'joi';

export const SeasonScalarFieldEnumSchema = Joi.string().valid(...["id","label"])