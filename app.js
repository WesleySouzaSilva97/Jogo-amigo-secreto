let amigos = [];
let listaDeNumerosSorteados = [];

function adicionarAmigo() {
    const nomeInput = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
  
    if (nomeInput.value) {
        const novoItem = document.createElement("li");
        novoItem.textContent = nomeInput.value;
        listaAmigos.appendChild(novoItem);
        amigos.push(nomeInput.value);
        nomeInput.value = "";
    } else {
        alert("Por favor, digite um nome!");
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    let nomeEscolhido = Math.floor(Math.random() * amigos.length);

    while (listaDeNumerosSorteados.includes(nomeEscolhido)) {
        nomeEscolhido = Math.floor(Math.random() * amigos.length);
    }

    listaDeNumerosSorteados.push(nomeEscolhido);

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = "O amigo sorteado é: " + amigos[nomeEscolhido];
}
