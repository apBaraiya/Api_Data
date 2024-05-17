require("dotenv").config();
const connectDB = require("./db/connection");
const schemaModel = require("./model/schema");

const DataJson = require("./data.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await schemaModel.Location.deleteMany();
    await schemaModel.Gola.deleteMany();
    await schemaModel.Location.create(DataJson);
    await schemaModel.Gola.create(DataJson);
    console.log("successfully data inserted");
  } catch (error) {
    console.log(error);
  }
};

start();
