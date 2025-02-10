const express = require("express");
const router = express.Router();
const artistsController = require("../controllers/artistsController");

router.get("/inventory", artistsController.getArtistInventory)

module.exports = router;