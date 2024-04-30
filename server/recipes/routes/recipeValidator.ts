import Joi from "joi"

// TODO : this one is probably false but it's a template
export const RecipeCreateSchema = Joi.object().keys({
    data: Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string().required(),
        ingredients: Joi.array().items(Joi.string()).required(),
        steps: Joi.array().items(Joi.string()).required(),
        imageUrl: Joi.string().uri().required(),
    })
}).required()
