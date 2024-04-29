// @ts-nocheck
import Joi from 'joi';
import { StepIngredientCreateWithoutIngredientRelationInputSchemaObject } from './StepIngredientCreateWithoutIngredientRelationInput.schema';
import { StepIngredientUncheckedCreateWithoutIngredientRelationInputSchemaObject } from './StepIngredientUncheckedCreateWithoutIngredientRelationInput.schema';
import { StepIngredientCreateOrConnectWithoutIngredientRelationInputSchemaObject } from './StepIngredientCreateOrConnectWithoutIngredientRelationInput.schema';
import { StepIngredientUpsertWithWhereUniqueWithoutIngredientRelationInputSchemaObject } from './StepIngredientUpsertWithWhereUniqueWithoutIngredientRelationInput.schema';
import { StepIngredientWhereUniqueInputSchemaObject } from './StepIngredientWhereUniqueInput.schema';
import { StepIngredientUpdateWithWhereUniqueWithoutIngredientRelationInputSchemaObject } from './StepIngredientUpdateWithWhereUniqueWithoutIngredientRelationInput.schema';
import { StepIngredientUpdateManyWithWhereWithoutIngredientRelationInputSchemaObject } from './StepIngredientUpdateManyWithWhereWithoutIngredientRelationInput.schema';
import { StepIngredientScalarWhereInputSchemaObject } from './StepIngredientScalarWhereInput.schema'

export const StepIngredientUncheckedUpdateManyWithoutIngredientRelationNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(StepIngredientCreateWithoutIngredientRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientCreateWithoutIngredientRelationInputSchemaObject)),
Joi.object().keys(StepIngredientUncheckedCreateWithoutIngredientRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientUncheckedCreateWithoutIngredientRelationInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(StepIngredientCreateOrConnectWithoutIngredientRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientCreateOrConnectWithoutIngredientRelationInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(StepIngredientUpsertWithWhereUniqueWithoutIngredientRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientUpsertWithWhereUniqueWithoutIngredientRelationInputSchemaObject))),
  set: Joi.alternatives().try(Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(StepIngredientUpdateWithWhereUniqueWithoutIngredientRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientUpdateWithWhereUniqueWithoutIngredientRelationInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(StepIngredientUpdateManyWithWhereWithoutIngredientRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientUpdateManyWithWhereWithoutIngredientRelationInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(StepIngredientScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientScalarWhereInputSchemaObject)))
}