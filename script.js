const jogos = []

function addJogo(){
    const nomeInserido = prompt("Digite o nome do jogo")

    const jogo = {
        id: jogos.length + 1,
        nome: nomeInserido,
    }
    jogos.push(jogo) // Adicione o jogo na lista
}

function showJogo (){
    console.clear()
    console.log("=== JOGOS ===")

    let mensagem = "=== jogos === \n"

    for(let i = 0; i < jogos.length; i++){
        console.log(`\n nome: ${jogos[i].nome}, preco: ${jogos[i].preco}, id: ${jogos[i].id} \n`)
        mensagem += `nome: ${jogos[i].nome}, preco: ${jogos[i].preco}, id: ${jogos[i].id} \n`
    }
    alert(mensagem)
}

function encontrarJogo(){
    const nomeProcurado = prompt("Digite o nome do jogo que você procura")
    const jogoEncontrado = jogos.find(jogo => jogo.nome.toLowerCase() === nomeProcurado.toLowerCase())
    if(jogoEncontrado){
        alert("O jogo: " + nomeProcurado + ", id: "+ jogoEncontrado.id + ", esta presente na lista" )
    } else {
        alert("O jogo não foi encontrado na lista" )
    }
}

function deletarPeloId(){
    const idProcurado = prompt("Digite o id do jogo que você deseja remover")

    // Busca o index com base na condição
    const indexDoJogo = jogos.findIndex(j => j.id == idProcurado)

    if(indexDoJogo != -1){
        jogos.splice(indexDoJogo, 1)
        alert("Removido com sucesso")
    } else {
        alert("Jogo não encontrado")
    }
}