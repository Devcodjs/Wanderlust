const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  image: {
    url: String,
    filename: String
  },
  price: Number,
  location: String,
  country: String,
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  geometry: {
    type: {
      type: String,
      enum: ["Point"],
      required: [true, "Geographic coordinates are required"],
    },
    coordinates: {
      type: [Number],
      required: [true, "Coordinates must be provided"],
      validate: {
        validator: (coords) => coords.length === 2,
        message: "Coordinates must contain exactly 2 values [longitude, latitude]",
      },
    },
  },
});

// Review deletion middleware
listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

module.exports = mongoose.model("Listing", listingSchema);