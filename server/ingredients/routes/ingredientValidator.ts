import Joi from "joi"

/* SEASONS */

// Joi validatior for the season using prisma schema
export const SeasonValidator = Joi.object
    ({
        name : Joi.string().required(),
    })

/* INGREDIENTS */

// Joi validatior for the ingredient using prisma schema
export const IngredientValidator = Joi.object
    ({
        name : Joi.string().required(),
        category : Joi.string().required(),
        season : Joi.valid(SeasonValidator).required()
    })

// Joi validatior for the ingredient ID
export const IngredientIdValidator = Joi.object
    ({
        id : Joi.number().required()
    })