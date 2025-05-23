const Listing = require("../models/listing");
const Review = require("../models/review");
const ExpressError = require("../utils/ExpressError");

module.exports.createReview = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      throw new ExpressError(404, "Listing not found");
    }

    const newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    
    listing.reviews.push(newReview);
    await Promise.all([newReview.save(), listing.save()]);
    
    req.flash("success", "Review successfully created!");
    res.redirect(`/listings/${listing._id}`);
  } catch (err) {
    next(err);
  }
};

module.exports.deleteReview = async (req, res, next) => {
  try {
    const { id, reviewId } = req.params;
    
    const review = await Review.findById(reviewId);
    if (!review) {
      throw new ExpressError(404, "Review not found");
    }

    const listing = await Listing.findByIdAndUpdate(id, {
      $pull: { reviews: reviewId }
    });
    
    if (!listing) {
      throw new ExpressError(404, "Listing not found");
    }

    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review successfully deleted!");
    res.redirect(`/listings/${id}`);
  } catch (err) {
    next(err);
  }
};