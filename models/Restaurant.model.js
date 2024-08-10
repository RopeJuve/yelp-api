import { Schema, model } from "mongoose";

const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
  },
  rating: {
    type: Number,
    required: true,
  },
  reviews: [
    {
      user: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
    },
  ],
  tags:[String],
});

const Restaurant = model("Restaurant", RestaurantSchema);

export default Restaurant;
