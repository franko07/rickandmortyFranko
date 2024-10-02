const express = require("express");
const { getCharById } = require("../controllers/getCharById.js");
const { getAllChars } = require("../controllers/getAllChars.js"); 
const login = require("../controllers/login.js");
const postFav = require("../controllers/postFav.js");
const postUser = require("../controllers/postUser.js");
const deleteFav = require("../controllers/deleteFav.js");
const { Router } = require("express");

const router = express.Router();

router.get("/character/:id", getCharById);
router.get("/characters", getAllChars);
router.post("/login", postUser);
router.get("/login", login);
router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);

module.exports = router;
