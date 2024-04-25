import Joi from 'joi';
import { IngredientWhereInputSchemaObject, IngredientOrderByWithRelationInputSchemaObject, IngredientWhereUniqueInputSchemaObject } from './objects'

export const IngredientAggregateSchema = Joi.object().keys({ where: Joi.object().keys(IngredientWhereInputSchemaObject), orderBy: Joi.object().keys(IngredientOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(IngredientWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number()  }).required()