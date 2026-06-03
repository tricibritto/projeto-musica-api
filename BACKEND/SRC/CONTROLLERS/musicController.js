const musicas = [];

exports.listarMusicas = (req, res) => {
    res.json(musicas);
};

exports.cadastrarMusica = (req, res) => {
    try {
        const { titulo, artista } = req.body;

        if (!titulo || !artista) {
            return res.status(400).json({
                erro: "Todos os campos são obrigatórios"
            });
        }

        const novaMusica = {
            id: Date.now(),
            titulo,
            artista
        };

        musicas.push(novaMusica);

        res.status(201).json(novaMusica);

    } catch {
        res.status(500).json({
            erro: "Erro interno"
        });
    }
};