const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner } = require("../middleware.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });
const listingController = require("../controllers/listings.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const geocoder = mbxGeocoding({ accessToken: process.env.MAP_TOKEN });



// Enhanced validation middleware
const validateListing = async (req, res, next) => {
  // console.log("control reached validateListing middleware");
  try {
    req.body.listing = req.body.listing || {};

    // Attempt to geocode location
    let geometry;
    try {
      const geoData = await geocoder
        .forwardGeocode({
          query: req.body.listing.location,
          limit: 1,
        })
        .send();

      if (geoData.body.features.length) {
        geometry = geoData.body.features[0].geometry;
      } else {
        throw new Error("Invalid location");
      }
    } catch (e) {
      // Use default coordinates (India Gate, Delhi)
      geometry = {
        type: "Point",
        coordinates: [77.2295, 28.6129],
      };
    }

    // Attach geometry
    req.body.listing.geometry = geometry;
    // Ensure image is handled correctly
    req.body.listing.image = req.body.listing.image || {};
    // If an image is uploaded, set the image object
    if (req.file) {
      req.body.listing.image = {
        url: req.file.path,
        filename: req.file.filename,
      };
    } else {
      // Ensure listing.image always exists
      console.log("No image uploaded, using default image");
      if (!req.body.listing.image || !req.body.listing.image.url) {
        req.body.listing.image = {
          url: "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?auto=format&fit=crop&w=800&q=60",
          filename: "defaultListing",
        };
      }
    }
    const { error } = listingSchema.validate(req.body);
    if (error) {
      console.error("Validation error:", error.details);
      const errMsg = error.details.map((el) => el.message).join(", ");
      return next(new ExpressError(400, errMsg));
    }
    next();
  } catch (err) {
    console.error("Error in validateListing middleware:", err);
    next(err);
  }
};


// Improved route configuration
router.route("/")
  .get(
    wrapAsync(listingController.index)  // Make sure controller uses .populate()
  )
  .post(
    isLoggedIn,
    upload.single("image"),  // Correct field name for multer
    validateListing,
    wrapAsync(listingController.createListing)
  );

// Search route
router.get('/search', 
  wrapAsync(listingController.searchListings)
);

// Form rendering routes
router.get("/new", 
  isLoggedIn, 
  listingController.renderNewForm
);


// Single listing operations
router.route("/:id")
  .get(
    wrapAsync(listingController.showListing)  // Ensure populate() for reviews
  )
  .put(
    isLoggedIn,
    isOwner,
    upload.single("image"),  // Same field name for updates
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .delete(
    isLoggedIn, 
    isOwner, 
    wrapAsync(listingController.deleteListing)
  );


router.get("/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

module.exports = router;