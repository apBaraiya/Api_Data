const express = require("express");
const router = express.Router();

const { getmyAllData } = require("../controllers/controllers");

router.route("/").get(getmyAllData); // getAlldata is function (only call the function);

module.exports = router;
