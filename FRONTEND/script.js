const API_URL = "http://localhost:3000/api/musicas";

const form = document.getElementById("musicForm");
const lista = document.getElementById("musicList");

async function carregarMusicas() {

    try {

        const resposta = await fetch(API_URL);

        const musicas = await resposta.json();

        lista.innerHTML = "";

        musicas.forEach(musica => {

            const item = document.createElement("li");

            item.innerHTML = `
                <strong>${musica.titulo}</strong>
                <br>
                Artista: ${musica.artista}
            `;

            lista.appendChild(item);
        });

    } catch (erro) {

        console.error("Erro ao carregar músicas:", erro);

    }
}

form.addEventListener("submit", async (evento) => {

    evento.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const artista = document.getElementById("artista").value;

    try {

        const resposta = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                titulo,
                artista
            })

        });

        if (!resposta.ok) {
            throw new Error("Erro ao cadastrar música");
        }

        form.reset();

        carregarMusicas();

    } catch (erro) {

        console.error("Erro:", erro);

    }

});

carregarMusicas();