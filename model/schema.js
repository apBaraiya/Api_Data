const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  id: Number,
  img: String,
  title: String,
  desc: String,
  navbtn: {
    map: String,
    Nbtn: String,
  },
  contactbtn: {
    isbtnTwo: Boolean,
    FirstNumber: Number,
    SecondNumber: Number,
    Cbtn: String,
  },
});

// Gola schema
const GolaSchema = new mongoose.Schema({
  id: Number,
  gola_img: String,
  gola_name: String,
});

// Create models
const Location = mongoose.model("Location", LocationSchema);
const Gola = mongoose.model("Gola", GolaSchema);

module.exports = { Location, Gola };
