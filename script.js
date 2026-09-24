const jogos = [];


// =====================================
// RF01 — ADICIONAR JOGO
// =====================================

function addJogo() {

    const nomeInserido = prompt("Digite o nome do jogo:");

    if (!nomeInserido || nomeInserido.trim() === "") {

        alert("Digite um nome válido.");

        return;
    }


    const precoInserido = prompt("Digite o preço do jogo:");

    if (
        !precoInserido ||
        isNaN(precoInserido) ||
        Number(precoInserido) < 0
    ) {

        alert("Digite um preço válido.");

        return;
    }


    const plataformaInserida = prompt(
        "Digite a plataforma do jogo:\n\n" +
        "Exemplo: PC, Xbox, PlayStation ou Nintendo"
    );


    if (
        !plataformaInserida ||
        plataformaInserida.trim() === ""
    ) {

        alert("A plataforma é obrigatória.");

        return;
    }


    // Cria um novo ID sem repetir IDs antigos

    let novoId = 1;


    if (jogos.length > 0) {

        novoId =
            Math.max(...jogos.map(jogo => jogo.id)) + 1;

    }


    // Cria o objeto do jogo

    const jogo = {

        id: novoId,

        nome: nomeInserido.trim(),

        preco: Number(precoInserido),

        plataforma: plataformaInserida.trim()

    };


    // Adiciona o jogo na lista

    jogos.push(jogo);


    alert(

        "Jogo adicionado ao carrinho com sucesso!\n\n" +

        "ID: " + jogo.id + "\n" +

        "Nome: " + jogo.nome + "\n" +

        "Preço: R$ " + jogo.preco.toFixed(2) + "\n" +

        "Plataforma: " + jogo.plataforma

    );

}



// =====================================
// RF03 — MOSTRAR TODOS OS JOGOS
// =====================================

function showJogo() {


    // Verifica se a lista está vazia

    if (jogos.length === 0) {

        alert("Nenhum item cadastrado.");

        return;
    }


    console.clear();

    console.log("=== JOGOS ===");


    let mensagem = "=== JOGOS ===\n\n";


    // Percorre todos os jogos

    for (let i = 0; i < jogos.length; i++) {


        console.log(

            "ID: " + jogos[i].id +

            " | Nome: " + jogos[i].nome +

            " | Preço: R$ " +
            jogos[i].preco.toFixed(2) +

            " | Plataforma: " +
            jogos[i].plataforma

        );


        mensagem +=

            "ID: " + jogos[i].id + "\n" +

            "Nome: " + jogos[i].nome + "\n" +

            "Preço: R$ " +
            jogos[i].preco.toFixed(2) + "\n" +

            "Plataforma: " +
            jogos[i].plataforma + "\n\n" +

            "--------------------\n\n";

    }


    alert(mensagem);

}



// =====================================
// RF04 — BUSCAR JOGO PELO NOME
// =====================================

function encontrarJogo() {


    const nomeProcurado = prompt(

        "Digite o nome do jogo que você procura:"

    );


    if (
        !nomeProcurado ||
        nomeProcurado.trim() === ""
    ) {

        alert("Digite um nome válido.");

        return;
    }


    // Procura pelo nome

    const jogoEncontrado = jogos.find(

        jogo =>

            jogo.nome.toLowerCase() ===

            nomeProcurado.trim().toLowerCase()

    );


    // Se encontrou

    if (jogoEncontrado) {


        alert(

            "Jogo encontrado!\n\n" +

            "ID: " + jogoEncontrado.id + "\n" +

            "Nome: " + jogoEncontrado.nome + "\n" +

            "Preço: R$ " +
            jogoEncontrado.preco.toFixed(2) + "\n" +

            "Plataforma: " +
            jogoEncontrado.plataforma

        );


    } else {


        // RN05

        alert("Nenhum item encontrado.");

    }

}



// =====================================
// RF02 — DELETAR JOGO PELO ID
// =====================================

function deletarPeloId() {


    const idProcurado = prompt(

        "Digite o ID do jogo que você deseja remover:"

    );


    if (
        !idProcurado ||
        isNaN(idProcurado)
    ) {

        alert("Digite um ID válido.");

        return;
    }


    // Procura o jogo pelo ID

    const indexDoJogo = jogos.findIndex(

        jogo =>

            jogo.id === Number(idProcurado)

    );


    // Se encontrou o jogo

    if (indexDoJogo !== -1) {


        const jogoRemovido =
            jogos[indexDoJogo];


        // Remove o jogo

        jogos.splice(indexDoJogo, 1);


        alert(

            "Jogo removido com sucesso!\n\n" +

            "ID: " + jogoRemovido.id + "\n" +

            "Nome: " + jogoRemovido.nome

        );


    } else {


        // RN03

        alert("Item não encontrado.");

    }

}



// =====================================
// RF05 — REMOVER O ÚLTIMO JOGO
// =====================================

function removerUltimo() {


    // Verifica se existem jogos

    if (jogos.length === 0) {

        alert("Nenhum item cadastrado.");

        return;
    }


    // Remove o último jogo

    const jogoRemovido = jogos.pop();


    alert(

        "Último jogo removido com sucesso!\n\n" +

        "ID: " + jogoRemovido.id + "\n" +

        "Nome: " + jogoRemovido.nome + "\n" +

        "Preço: R$ " +
        jogoRemovido.preco.toFixed(2) + "\n" +

        "Plataforma: " +
        jogoRemovido.plataforma

    );

}



// =====================================
// RF06 — LIMPAR TODOS OS JOGOS
// =====================================

function limparTudo() {


    // Verifica se existem jogos

    if (jogos.length === 0) {

        alert("Nenhum item cadastrado.");

        return;
    }


    // Solicita confirmação

    const confirmar = confirm(

        "Tem certeza que deseja remover todos os jogos?"

    );


    // Se confirmou

    if (confirmar) {


        jogos.length = 0;


        alert(

            "Todos os jogos foram removidos com sucesso."

        );


    } else {


        alert("Operação cancelada.");

    }

}



// =====================================
// RF07 — MOSTRAR TOTAL DE JOGOS
// =====================================

function mostrarTotal() {


    alert(

        "Total de itens cadastrados: " +

        jogos.length

    );

}