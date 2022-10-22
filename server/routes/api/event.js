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
      let event = {};

      //If User is a Customer trying to create a Event
      if (organizer.role !== "organizer" && organizer.role !== "admin") {
        return res
          .status(403)
          .json({ errors: [{ msg: "Customer cannot create an Event" }] });
      }
      //If User is not verified!
      if (!organizer.verified) {
        return res
          .status(403)
          .json({ errors: [{ msg: "You're Not Verified" }] });
      }
      event = new Event(EventFields);

      await event.save(async function (err, event) {
        organizer.events.push(event.id); //Add the event created in organizers events array
        await organizer.save();
      });

      res.json(event);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
