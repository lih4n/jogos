const jogos = [];


// ADICIONAR JOGO
function addJogo() {

    const nomeInserido = prompt("Digite o nome do jogo:");

    if (!nomeInserido || nomeInserido.trim() === "") {
        alert("Digite um nome válido.");
        return;
    }

    const precoInserido = prompt("Digite o preço do jogo:");

    if (!precoInserido || isNaN(precoInserido)) {
        alert("Digite um preço válido.");
        return;
    }

    // Cria um novo ID sem repetir IDs antigos
    let novoId = 1;

    if (jogos.length > 0) {
        novoId = Math.max(...jogos.map(jogo => jogo.id)) + 1;
    }

    const jogo = {
        id: novoId,
        nome: nomeInserido.trim(),
        preco: Number(precoInserido)
    };

    jogos.push(jogo);

    alert("Jogo adicionado ao carrinho com sucesso!");
}


// MOSTRAR TODOS OS JOGOS
function showJogo() {

    if (jogos.length === 0) {
        alert("Nenhum jogo foi adicionado ainda.");
        return;
    }

    console.clear();
    console.log("=== JOGOS ===");

    let mensagem = "=== JOGOS ===\n\n";

    for (let i = 0; i < jogos.length; i++) {

        console.log(
            `Nome: ${jogos[i].nome}, Preço: R$ ${jogos[i].preco.toFixed(2)}, ID: ${jogos[i].id}`
        );

        mensagem +=
            `ID: ${jogos[i].id}\n` +
            `Nome: ${jogos[i].nome}\n` +
            `Preço: R$ ${jogos[i].preco.toFixed(2)}\n\n`;
    }

    alert(mensagem);
}


// BUSCAR JOGO PELO NOME
function encontrarJogo() {

    const nomeProcurado = prompt(
        "Digite o nome do jogo que você procura:"
    );

    if (!nomeProcurado || nomeProcurado.trim() === "") {
        alert("Digite um nome válido.");
        return;
    }

    const jogoEncontrado = jogos.find(
        jogo =>
            jogo.nome.toLowerCase() === nomeProcurado.trim().toLowerCase()
    );

    if (jogoEncontrado) {

        alert(
            "Jogo encontrado!\n\n" +
            "Nome: " + jogoEncontrado.nome + "\n" +
            "Preço: R$ " + jogoEncontrado.preco.toFixed(2) + "\n" +
            "ID: " + jogoEncontrado.id
        );

    } else {

        alert("O jogo não foi encontrado na lista.");

    }
}


// DELETAR JOGO PELO ID
function deletarPeloId() {

    const idProcurado = prompt(
        "Digite o ID do jogo que você deseja remover:"
    );

    if (!idProcurado || isNaN(idProcurado)) {
        alert("Digite um ID válido.");
        return;
    }

    // Procura o jogo pelo ID
    const indexDoJogo = jogos.findIndex(
        jogo => jogo.id == idProcurado
    );

    if (indexDoJogo !== -1) {

        const jogoRemovido = jogos[indexDoJogo];

        jogos.splice(indexDoJogo, 1);

        alert(
            "Jogo removido com sucesso!\n\n" +
            "Nome: " + jogoRemovido.nome
        );

    } else {

        alert("Jogo não encontrado.");

    }
}