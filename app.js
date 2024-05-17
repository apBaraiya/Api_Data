require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const connectDB = require("./db/connection");

app.get("/", (req, res) => {
  res.send("Hi, I am Live");
});

// middleware or set roter
const data_routes = require("./routes/routes");
app.use("/api", data_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`${PORT} yes im connected`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
