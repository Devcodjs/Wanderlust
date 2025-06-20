const express = require("express");
const router = express.Router({ mergeParams: true });
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const userController = require("../controllers/user");

router.route("/signup")
  .get(userController.renderSignup)
  .post(userController.signup);

router.route("/login")
  .get(userController.renderLogin)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", { 
      failureRedirect: "/login",
      failureFlash: true 
    }),
    userController.login
  );

router.get("/logout", userController.logout);

module.exports = router;