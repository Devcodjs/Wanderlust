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

// Enhanced validation middleware
const validateListing = (req, res, next) => {
  // Handle file upload
  if (req.file) {
    req.body.listing.image = {
      url: req.file.path,
      filename: req.file.filename
    };
  } else if (!req.body.listing.image?.url) {
    // Set default image if none provided
    req.body.listing.image = {
      url: "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      filename: "defaultListing"
    };
  }

  // Validate with Joi schema
  const { error } = listingSchema.validate(req.body);
  if (error) {
    const errMsg = error.details.map((el) => el.message).join(", ");
    return next(new ExpressError(400, errMsg));
  }
  next();
};

// Improved route configuration
router.route("/")
  .get(
    wrapAsync(listingController.index)  // Make sure controller uses .populate()
  )
  .post(
    isLoggedIn,
    upload.single("listing[image]"),  // Correct field name for multer
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