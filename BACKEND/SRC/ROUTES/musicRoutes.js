const express = require("express");
const router = express.Router();

const musicController = require("../controllers/musicController");

router.get("/musicas", musicController.listarMusicas);

router.post("/musicas", musicController.cadastrarMusica);

module.exports = router;