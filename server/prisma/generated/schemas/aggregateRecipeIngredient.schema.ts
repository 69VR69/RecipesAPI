import Joi from 'joi';
import { RecipeIngredientWhereInputSchemaObject, RecipeIngredientOrderByWithRelationInputSchemaObject, RecipeIngredientWhereUniqueInputSchemaObject } from './objects'

export const RecipeIngredientAggregateSchema = Joi.object().keys({ where: Joi.object().keys(RecipeIngredientWhereInputSchemaObject), orderBy: Joi.object().keys(RecipeIngredientOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number()  }).required()