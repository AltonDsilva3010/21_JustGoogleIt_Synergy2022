const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const config = require("config");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const auth = require("../../middleware/auth");

// @route    POST api/users
// @desc     Register user
// @access   Public

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("rollno", "Rollno is required").not().isEmpty(),
    check("classno", "Class is required").not().isEmpty(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, rollno, classno, password, role } = req.body;

    try {
      //See if user Exists
      let user = await User.findOne({ rollno });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      user = new User({
        name,
        rollno,
        classno,
        password,
        role,
      });

      //Encrypt password

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      //Return jsonwebtoken

      const payload = {
        user: {
          id: user.id,
        },
      };
      dotenv.config();

      jwt.sign(
        payload,
        process.env.JWTSECRET,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
);

// @route    PUT api/users
// @desc     Verify organizer
// @access   Private

router.put(
  "/",
  [auth, [check("email", "Please include a valid email").isEmail()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email } = req.body;

    try {
      let organizer = await User.findOne({ email });
      let admin = await User.findById(req.user.id);

      if (admin.role !== "admin") {
        return res
          .status(403)
          .json({ errors: [{ msg: "Only admin can verify organizers" }] });
      }

      if (organizer.role !== "organizer") {
        return res
          .status(403)
          .json({ errors: [{ msg: "User is not an Organizer" }] });
      }

      organizer.verified = true;
      await organizer.save();
      res.json(organizer);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
