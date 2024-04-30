import Joi from "joi"
import { IngredientValidator } from "../../ingredients/routes/ingredientValidator.js"

/* RECIPES */

// Joi validatior for the recipe using prisma schema
export const RecipeValidator = Joi.object
    ({
        name : Joi.string().required()
    })

// Joi validatior for the recipe ID
export const RecipeIdValidator = Joi.object
    ({
        id : Joi.number().required()
    })

/* RECIPE INGREDIENTS */

// Joi validatior for the recipe ingredient using prisma schema
export const RecipeIngredientValidator = Joi.object
    ({
        ingredient : Joi.valid(IngredientValidator).required(),
        recipe: Joi.valid(RecipeValidator).required(),
        number : Joi.number().required(),
    })