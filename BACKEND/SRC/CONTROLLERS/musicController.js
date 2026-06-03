const musicas = [];

// GET
exports.listarMusicas = (req, res) => {
    res.json(musicas);
};

// POST
exports.cadastrarMusica = (req, res) => {
    try {

        const { titulo, artista } = req.body;

        if (!titulo || !artista) {
            return res.status(400).json({
                erro: "Preencha todos os campos"
            });
        }

        const novaMusica = {
            id: Date.now(),
            titulo,
            artista
        };

        musicas.push(novaMusica);

        res.status(201).json({
            mensagem: "Música cadastrada com sucesso",
            musica: novaMusica
        });

    } catch (erro) {

        res.status(500).json({
            erro: "Erro interno do servidor"
        });

    }
};

// PUT
exports.atualizarMusica = (req, res) => {

    const id = Number(req.params.id);

    const { titulo, artista } = req.body;

    const musica = musicas.find(
        musica => musica.id === id
    );

    if (!musica) {
        return res.status(404).json({
            erro: "Música não encontrada"
        });
    }

    musica.titulo = titulo;
    musica.artista = artista;

    res.json({
        mensagem: "Música atualizada com sucesso",
        musica
    });

};

// DELETE
exports.deletarMusica = (req, res) => {

    const id = Number(req.params.id);

    const indice = musicas.findIndex(
        musica => musica.id === id
    );

    if (indice === -1) {
        return res.status(404).json({
            erro: "Música não encontrada"
        });
    }

    musicas.splice(indice, 1);

    res.json({
        mensagem: "Música removida com sucesso"
    });

};