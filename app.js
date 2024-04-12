let numerosSorteados = [];
let numeroDeSorteios = 10
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;

function gerarNumeroSecreto() {
    let numeroEscolhido = parseInt(Math.random() * numeroDeSorteios + 1);
    let tamanhoMaximo = numerosSorteados.length;

    if (tamanhoMaximo == numeroDeSorteios) {
        numerosSorteados = [];
    }

    if (numerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroSecreto();
    } else {
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados);
        return numeroEscolhido;
    }
}

function exibirTexto (tag, texto) {
    let item = document.querySelector(tag);
    item.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.3})
}

function limparCampo() {
    let limparCampo = document.querySelector('input');
    limparCampo.value = '';
}

function textoInicial() {
    exibirTexto('h1', 'Jogo do número secreto.');
    exibirTexto('p', 'Escolha um numero entre 1 e 10.');

}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroSecreto();
    tentativas = 1;
    limparCampo();
    textoInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

    textoInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    let tentativaEscrita = tentativas > 1 ? 'tentativas' : 'tentativa';
    let textoParagrafo = `Isso aí, você descobriu o número secreto em ${tentativas} ${tentativaEscrita}!`

    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Você acertou!');
        exibirTexto('p', textoParagrafo);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto) {
        exibirTexto('p', 'O número secreto é menor.');
    } else {
        exibirTexto('p', 'O número secreto é maior.');
    }
    tentativas++;
    limparCampo()
}