const express = require("express");
const router = express.Router();
const passport = require("passport");

// Require the controllers
const user_controller = require("../controllers/user");

router.post("/register", user_controller.user_register);
router.post("/login", user_controller.user_login);
router.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  user_controller.user_me
);

module.exports = router;
