let amigos = [];  // Array para armazenar os nomes dos amigos
let listaDeNumerosSorteados = [];  // Lista para garantir que o número sorteado não se repita

// Função para adicionar amigo
function adicionarAmigo() {
    const nomeInput = document.getElementById("amigo");  // Pega o valor do input
    const listaAmigos = document.getElementById("listaAmigos");  // Pega a lista onde os amigos serão adicionados
  
    if (nomeInput.value) {  // Verifica se o campo de input não está vazio
        const novoItem = document.createElement("li");  // Cria um novo item de lista
        novoItem.textContent = nomeInput.value;  // Adiciona o nome no item de lista
        listaAmigos.appendChild(novoItem);  // Adiciona o item à lista
        amigos.push(nomeInput.value);  // Adiciona o nome ao array de amigos
        nomeInput.value = "";  // Limpa o campo de input após adicionar
    } else {
        alert("Por favor, digite um nome!");  // Se o campo estiver vazio, exibe um alerta
    }
}

// Função para gerar nome aleatório
function sortearAmigo() {
    // Verifica se há amigos para sortear
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    // Gera um número aleatório entre 0 e o tamanho do array de amigos
    let nomeEscolhido = Math.floor(Math.random() * amigos.length);  // Índice aleatório entre 0 e amigos.length - 1

    // Verifica se o número sorteado já foi escolhido
    while (listaDeNumerosSorteados.includes(nomeEscolhido)) {
        nomeEscolhido = Math.floor(Math.random() * amigos.length);  // Gera um novo índice até encontrar um não repetido
    }

    // Adiciona o número sorteado à lista de sorteados
    listaDeNumerosSorteados.push(nomeEscolhido);

    // Exibe o nome sorteado
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = "O amigo sorteado é: " + amigos[nomeEscolhido];
}

