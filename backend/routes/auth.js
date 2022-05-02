const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

//create a user using : post "/api/auth/createuser" No login required
router.post(
  "/createUser",
  [
    // name must be an at least 3 chars long
    body("name", "Enter a valid name").isLength({ min: 3 }),
    // email must be an email
    body("email", "Enter a valid email").isEmail(),
    // password must be at least 5 chars long
    body("password", "Enter a valid password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //checkin the user with email exists already aur not
    let user=await User.findOne({email:req.body.email});
    if(user){
      return res.status(400).json({errors :"Sorry a user with this email already exists"})
    }
    user=await User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    })
      // .then((user) => res.json(user))
      // .then((err) => {
      //   console.log(err),
      //   res.json({ error: "Please enter a unique value for email",message:err.message })
      // });
      res.json({ nice:"nice" })
  }
);
module.exports = router;
