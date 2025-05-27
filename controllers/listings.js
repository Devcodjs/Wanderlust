const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const geocodingClient = mbxGeocoding({ accessToken:process.env.MAP_TOKEN });

module.exports.index = async (req, res, next) => {
  try {
    const allListings = await Listing.find({}).populate("author");
    res.render("listings/index", { allListings });
  } catch (err) {
    next(err);
  }
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new");
};

module.exports.renderEditForm = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      req.flash("error", "Listing not found");
      return res.redirect("/listings");
    }
    
    const originalImageUrl = listing.image.url.replace("/upload", "/upload/w_250");
    res.render("listings/edit", { listing, originalImageUrl });
  } catch (err) {
    next(err);
  }
};

module.exports.showListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id)
      .populate("owner")
      .populate({
        path: "reviews",
        populate: [
          { path: "author" },
          { path: "listing" }
        ]
      });

    if (!listing) {
      req.flash("error", "Listing not found");
      return res.redirect("/listings");
    }

    // Handle deleted users
    if (!listing.owner) listing.owner = { username: "Deleted User" };
    
    res.render("listings/show", {
      listing,
      currentUser: res.locals.currentUser
    });
    
  } catch (err) {
    next(err);
  }
};

module.exports.createListing = async (req, res, next) => {
try{
  const newListing  = new Listing({
    ...req.body.listing,
    owner:req.user._id,
  });

   await newListing.save();
   req.flash("success","Listing created successfully!");
   res.redirect("/listings");

} catch (err){
   next(err);
}



};

module.exports.updateListing = async (req, res, next) => {
  try {
    let listing = await Listing.findById(req.params.id);
    if (!listing) {
      req.flash("error", "Listing not found");
      return res.redirect("/listings");
    }

    if (req.file) {
      listing.image = {
        url: req.file.path,
        filename: req.file.filename
      };
    }

    Object.assign(listing, req.body.listing);
    await listing.save();
    
    req.flash("success", "Listing successfully updated!");
    res.redirect(`/listings/${listing._id}`);
  } catch (err) {
    next(err);
  }
};

module.exports.deleteListing = async (req, res, next) => {
  try {
    const listing = await Listing.findByIdAndDelete(req.params.id);
    if (!listing) {
      req.flash("error", "Listing not found");
      return res.redirect("/listings");
    }
    
    req.flash("success", "Listing successfully deleted!");
    res.redirect("/listings");
  } catch (err) {
    next(err);
  }
};

module.exports.searchListings = async (req, res, next) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.redirect('/listings');
    }

    const allListings = await Listing.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
        { location: { $regex: query, $options: 'i' } },
        { country: { $regex: query, $options: 'i' } }
      ]
    });

    res.render("listings/index", { allListings });
  } catch (err) {
    next(err);
  }
};