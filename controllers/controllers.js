const schema = require("../model/schema"); // add new line

const getmyAllData = async (req, res) => {
  const myLocationData = await schema.Location.find().sort({"id":1}) // add new line
  const myGolaData = await schema.Gola.find().sort({"id":1}); // add new line
  res.status(200).json({ myLocationData , myGolaData }); // replace parameter(msg: "I am getAllData" ==> myData)
};

module.exports = { getmyAllData };
