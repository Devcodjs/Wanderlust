const passport = require('passport');
const Listing = require('./models/listing');
const Review = require('./models/review');

module.exports = {
    // Authentication middleware
    isLoggedIn: (req, res, next) => {
        if (!req.isAuthenticated()) {
            req.session.redirectUrl = req.originalUrl;
            req.flash("error", "You must be logged in to perform this action!");
            return res.redirect("/login");
        }
        next();
    },

    // Session URL saver
    saveRedirectUrl: (req, res, next) => {
        if (req.session.redirectUrl) {
            res.locals.redirectUrl = req.session.redirectUrl;
            delete req.session.redirectUrl;
        }
        next();
    },

    // Passport authentication strategy
    authenticate: passport.authenticate('local', {
        failureFlash: true,
        failureRedirect: '/login',
        keepSessionInfo: true
    }),

    // Ownership verification middleware
    isOwner: async (req, res, next) => {
        try {
            const { id } = req.params;
            const listing = await Listing.findById(id);
            
            if (!listing) {
                req.flash("error", "Listing not found!");
                return res.redirect("/listings");
            }
            
            if (!listing.owner.equals(res.locals.currentUser._id)) {
                req.flash("error", "You don't have permission for this action!");
                return res.redirect(`/listings/${id}`);
            }
            
            next();
        } catch (err) {
            req.flash("error", "Error verifying ownership!");
            res.redirect("/listings");
        }
    },

    // Review author verification middleware
    isReviewAuthor: async (req, res, next) => {
        try {
            const { id, reviewId } = req.params;
            const review = await Review.findById(reviewId);
            
            if (!review) {
                req.flash("error", "Review not found!");
                return res.redirect(`/listings/${id}`);
            }
            
            if (!review.author.equals(res.locals.currentUser._id)) {
                req.flash("error", "You can only modify your own reviews!");
                return res.redirect(`/listings/${id}`);
            }
            
            next();
        } catch (err) {
            req.flash("error", "Error verifying review author!");
            res.redirect("/listings");
        }
    }
};