const User = require("../models/user");

// Signup Form
module.exports.renderSignup = (req, res) => {
  res.render("users/signup");
};

// Signup Logic
module.exports.signup = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = new User({ email, username });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, err => {
      if (err) return next(err);
      req.flash("success", "Welcome to Wanderlust!");
      res.redirect("/listings");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
};

// Login Form
module.exports.renderLogin = (req, res) => {
  res.render("users/login");
};

// Login Logic
module.exports.login = (req, res) => {
  req.flash("success", "Welcome back!");
  const redirectUrl = res.locals.redirectUrl || "/listings";
  delete req.session.redirectUrl;
  res.redirect(redirectUrl);
};

// Logout
module.exports.logout = (req, res) => {
  req.logout(err => {
    if (err) return next(err);
    req.flash("success", "Goodbye!");
    res.redirect("/listings");
  });
};