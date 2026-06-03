const express = require("express");

const router = express.Router();

const musicController = require("../controllers/musicController");

router.get(
    "/musicas",
    musicController.listarMusicas
);

router.post(
    "/musicas",
    musicController.cadastrarMusica
);

router.put(
    "/musicas/:id",
    musicController.atualizarMusica
);

router.delete(
    "/musicas/:id",
    musicController.deletarMusica
);

module.exports = router;