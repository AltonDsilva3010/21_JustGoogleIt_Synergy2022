const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const config = require("config");
const auth = require("../../middleware/auth");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../../models/User");
const Event = require("../../models/Event");

// @route    POST api/event
// @desc     Create an Event
// @access   Private

router.post(
  "/",
  [auth, [check("name", "Name cannot be empty").not().isEmpty()]], //check if name of event is empty
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, price, dateofevent, location, type } = req.body;

    //Event Object
    const EventFields = {};
    EventFields.organizer = req.user.id;
    EventFields.name = name;

    if (description || price || dateofevent || location || type) {
      EventFields.description = description;
      EventFields.price = price;
      EventFields.dateofevent = dateofevent;
      EventFields.location = location;
      EventFields.type = type;
    }

    try {
      let organizer = await User.findById(req.user.id);
      let newevent = {};

      //If User is a Student trying to create a Event
      if (organizer.role == "student") {
        return res
          .status(403)
          .json({ errors: [{ msg: "Student cannot create an Event" }] });
      }

      newevent = new Event(EventFields);

      await newevent.save(async function (err, newevent) {
        organizer.organized.push(newevent.id); //Add the event created in organizers organized array
        await organizer.save();
      });

      res.json(newevent);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
