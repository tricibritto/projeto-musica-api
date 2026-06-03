const API_URL = "http://localhost:3000/api/musicas";

const form = document.getElementById("musicForm");

const lista = document.getElementById("musicList");

// LISTAR
async function carregarMusicas() {

    const resposta = await fetch(API_URL);

    const musicas = await resposta.json();

    lista.innerHTML = "";

    musicas.forEach(musica => {

        const item = document.createElement("li");

        item.innerHTML = `
            <strong>${musica.titulo}</strong>
            <br>
            🎤 ${musica.artista}

            <div class="acoes">

                <button onclick="editarMusica(${musica.id})">
                    ✏️ Editar
                </button>

                <button onclick="deletarMusica(${musica.id})">
                    🗑️ Excluir
                </button>

            </div>
        `;

        lista.appendChild(item);

    });

}

// CADASTRAR
form.addEventListener("submit", async (evento) => {

    evento.preventDefault();

    const titulo = document.getElementById("titulo").value;

    const artista = document.getElementById("artista").value;

    await fetch(API_URL, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            titulo,
            artista
        })

    });

    form.reset();

    carregarMusicas();

});

// EDITAR
async function editarMusica(id){

    const titulo = prompt("Novo título:");

    if(!titulo) return;

    const artista = prompt("Novo artista:");

    if(!artista) return;

    await fetch(`${API_URL}/${id}`, {

        method: "PUT",

        headers:{
            "Content-Type":"application/json"
        },

        body: JSON.stringify({
            titulo,
            artista
        })

    });

    carregarMusicas();

}

// EXCLUIR
async function deletarMusica(id){

    const confirmar = confirm(
        "Deseja excluir esta música?"
    );

    if(!confirmar) return;

    await fetch(`${API_URL}/${id}`, {
        method:"DELETE"
    });

    carregarMusicas();

}

carregarMusicas();