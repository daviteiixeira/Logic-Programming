//Início
alert("Preste atencao, voce lera um fluxo de uma historia e tera que guiar o personagem da historia ate o seu destino")
alert("Um homem esta caminhando em uma rua e ele quer chegar em um restaurante para ele chegar ao restaurante, precisa dar dois passos para frente, um para o lado direito e dois para o lado esquerdo.")

//Caminhos
let esquerda = "esquerda";
let direita = "direita";
let frente = "frente";
let atras = "atras";
let decision1 = "";
let decision2 = "";
let decision3 = "";
let decision4 = "";
let decision5 = "";

//Dois passos para frente
decision1 = prompt('Voce vai para frente ou para atras? (escreva frente ou atras)');

if (decision1 == atras) {
    while (decision1 != frente) {
        alert("Voce foi para atras")
        alert("voce errou o caminho, vamos fazer de novo");
        decision1 = prompt("Voce vai para frente ou para atras? (escreva frente ou atras)");
    }
}
if (decision1 == frente) {
    alert("Voce foi para frente");
    alert("Parabens! Voce acertou");
} else {
    alert("Nao entendi o que voce quis dizer");
}

decision2 = prompt('Voce vai para frente ou para atras? (escreva frente ou atras)');

if (decision2 == atras) {
    while (decision2 != frente) {
        alert("Voce foi para atras")
        alert("voce errou o caminho, vamos fazer de novo");
        decision2 = prompt("Voce vai para frente ou para atras? (escreva frente ou atras)");
    }
}
if (decision2 == frente) {
    alert("Voce foi para frente");
    alert("Parabens! Voce acertou");
} else {
    alert("Nao entendi o que voce quis dizer");
}

//Um passo para a direita
decision3 = prompt('Voce vai para direita ou para esquerda? (escreva direita ou esquerda)');

if (decision3 == esquerda) {
    while (decision3 != direita) {
        alert("Voce foi para esquerda")
        alert("voce errou o caminho, vamos fazer de novo");
        decision3 = prompt("Voce vai para direita ou para esquerda? (escreva direita ou esquerda)");
    }
}
if (decision3 == direita) {
    alert("Voce foi para direita");
    alert("Parabens! Voce acertou");
} else {
    alert("Nao entendi o que voce quis dizer");
}

//Dois passos para a esquerda
decision4 = prompt('Voce vai para direita ou para esquerda? (escreva direita ou esquerda)');

if (decision4 == direita) {
    while (decision4 != esquerda) {
        alert("Voce foi para direita")
        alert("voce errou o caminho, vamos fazer de novo");
        decision4 = prompt("Voce vai para direita ou para esquerda? (escreva direita ou esquerda)");
    }
}
if (decision4 == esquerda) {
    alert("Voce foi para esquerda");
    alert("Parabens! Voce acertou");
} else {
    alert("Nao entendi o que voce quis dizer");
}

decision5 = prompt('Voce vai para direita ou para esquerda? (escreva direita ou esquerda)');

if (decision5 == direita) {
    while (decision5 != esquerda) {
        alert("Voce foi para esquerda")
        alert("voce errou o caminho, vamos fazer de novo");
        decision5 = prompt("Voce vai para direita ou para esquerda? (escreva direita ou esquerda)");
    }
}
if (decision5 == esquerda) {
    alert("Voce foi para direita");
    alert("Parabens! Voce acertou");
    alert("O homem chegou ao restaurante!");
    alert("Parabens, voce venceu o jogo");
} else {
    alert("Nao entendi o que voce quis dizer");
}