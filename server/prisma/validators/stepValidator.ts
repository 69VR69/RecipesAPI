import Joi from "joi"
import { IngredientValidator } from "./ingredientValidator.js"

/* STEPS */

// Joi validatior for the step using prisma schema
export const StepValidator = Joi.object
    ({
        description : Joi.string().required(),
        recipeId : Joi.number().required()
    })

// Joi validatior for the step ID
export const StepIdValidator = Joi.object
    ({
        id : Joi.number().required()
    })

/* STEP INGREDIENTS */

// Joi validatior for the step ingredient using prisma schema
export const StepIngredientValidator = Joi.object
    ({
        ingredient : Joi.valid(IngredientValidator).required(),
        step: Joi.valid(StepValidator).required(),
        number : Joi.number().required(),
    })