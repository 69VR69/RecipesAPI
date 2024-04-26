import Joi from 'joi';
import { IngredientUpdateManyMutationInputSchemaObject, IngredientWhereInputSchemaObject } from './objects'

export const IngredientUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(IngredientUpdateManyMutationInputSchemaObject), where: Joi.object().keys(IngredientWhereInputSchemaObject)  }).required()