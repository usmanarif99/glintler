var express = require('express');
var router = express.Router();
var apiServices = require('../models/apiServices');

router.get("/getrisk/:date" , apiServices.getrisk);
router.post("/setrisk" , apiServices.setrisk);
router.post("/deleterisk" , apiServices.deleterisk);

module.exports = router;
