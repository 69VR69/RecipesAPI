// @ts-nocheck
import Joi from 'joi';


export const SeasonUncheckedCreateWithoutIngredientInputSchemaObject = {
    id: Joi.number(),
  label: Joi.string().required()
}