import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    productId: {
      type: Number,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    attributes: [
      {
        attrName: {
          type: String,
          required: true,
        },
        value: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Product', ProductSchema);
