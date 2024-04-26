import Joi from 'joi';
import { RecipeWhereInputSchemaObject, RecipeOrderByWithRelationInputSchemaObject, RecipeWhereUniqueInputSchemaObject } from './objects'

export const RecipeAggregateSchema = Joi.object().keys({ where: Joi.object().keys(RecipeWhereInputSchemaObject), orderBy: Joi.object().keys(RecipeOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(RecipeWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number()  }).required()