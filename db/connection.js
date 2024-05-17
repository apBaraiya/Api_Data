const mongoose = require("mongoose");

const connectDB = (uri) => {
  console.log("successfully connectedDB");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
