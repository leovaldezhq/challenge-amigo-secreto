//array para armazenar nomes
let listaAmigoSecreto = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//para o botão de adicionar amigo funcionar apertando Enter
document.addEventListener('DOMContentLoaded', function() {
    let input = document.querySelector('input');
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            adicionarAmigo();
        }
    });
});

function adicionarAmigo() {
    let amigoSecreto = document.querySelector('input').value.trim();

    if (!amigoSecreto) {
        alert('Insira um nome válido');
        return;
    }

    if (listaAmigoSecreto.includes(amigoSecreto)) {
        alert('Este nome já foi adicionado!');
        return;
    }

    listaAmigoSecreto.push(amigoSecreto);
    atualizarLista();
    limparCampo();
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    listaAmigoSecreto.forEach(function(nome) {
        let item = document.createElement('li');
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function limparCampo() {
    const input = document.querySelector('input');
    input.value = '';
    input.focus();
}

function sortearAmigo() {
    if (listaAmigoSecreto.length === 0) {
        alert('Adicione pelo menos 1 participante!');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigoSecreto.length);
    const amigoSorteado = listaAmigoSecreto[indiceAleatorio];
    listaAmigoSecreto.splice(indiceAleatorio, 1);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Seu amigo secreto é: ${amigoSorteado}!</li>`;

    atualizarLista();
}

function reiniciarLista() {
    listaAmigoSecreto = [];
    atualizarLista();
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    alert('Você reiniciou a lista! Adicione novos participantes')
}

console.log(listaAmigoSecreto);