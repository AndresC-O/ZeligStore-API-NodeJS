import mongoose from 'mongoose';
import getModelName from 'Utils/getModelName';
import { pluralName as categoryModelName } from '../category/category.model';
import { pluralName as modelModelName } from '../model/model.model';
import { pluralName as designModelName } from '../design/design.model';

const { Schema } = mongoose;
export const { singularName, pluralName } = getModelName('shoes');

const schema = new Schema(
  {
    size:{
      type: Number,
      required: true,
    },
    color:{
      type: String,
      required: true,
    },
    price:{
      type: Number,
      required: true,
    },
    url:{
      type: String,
      required: true,
    },
    category:{
      type: Schema.Types.ObjectId,
      ref: categoryModelName,
      required: true,
    },
    model:{
      type: Schema.Types.ObjectId,
      ref: modelModelName,
      required: true,
    },
    design:{
      type: Schema.Types.ObjectId,
      ref: designModelName,
      required: true,
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'deleted'],
      default: 'active',
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

// Ensure virtual fields are serialised.
schema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(_doc, ret) {
    // eslint-disable-next-line no-param-reassign,no-underscore-dangle
    delete ret._id;
  },
});

// rename name Example to singular Model
export default mongoose.models[singularName] ||
mongoose.model(pluralName, schema);
