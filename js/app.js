let jogosAlugados = 0;

function contagemDeAluguel() {
    console.log(`Quantidade de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        let confirmarDevolucao = confirm("Tem certeza que deseja devolver este jogo?");
        if (confirmarDevolucao) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.innerHTML = 'Alugar';
            jogosAlugados--; 
        }
    } else {
        let confirmarAluguel = confirm("Tem certeza que deseja alugar este jogo?");
        if (confirmarAluguel) {
            imagem.classList.add('dashboard__item__img--rented');
            botao.classList.add('dashboard__item__button--return');
            botao.innerHTML = 'Devolver';
            jogosAlugados++; 
        }
    }
    contagemDeAluguel();
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contagemDeAluguel();
});