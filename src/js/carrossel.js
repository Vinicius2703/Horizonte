// 1. Seleção dos elementos do DOM (Apenas uma vez)
const trilho = document.getElementById("trilho");
const avancar = document.getElementById("avanca");
const retornar = document.getElementById("volta");

// 2. Banco de dados dos destinos (Array de Objetos)
const destinos = [
    {
        nome: "Capadócia",
        pais: "TURQUIA",
        imagem: "./assets/carrossel/capadocia.png",
        avaliacao: "4,8",
        reviews: "497",
        preco: "R$ 3.600,00"
    },
    {
        nome: "Vancouver",
        pais: "CANADÁ",
        imagem: "./assets/carrossel/vancouver.png",
        avaliacao: "4,7",
        reviews: "452",
        preco: "R$ 3.650,00"
    },
    {
        nome: "Paris",
        pais: "FRANÇA",
        imagem: "./assets/carrossel/paris.png",
        avaliacao: "4,2",
        reviews: "932",
        preco: "R$ 3.420,00"
    },
    {
        nome: "California",
        pais: "EUA",
        imagem: "./assets/carrossel/california.png",
        avaliacao: "4,5",
        reviews: "612",
        preco: "R$ 3.420,00"
    },

    {
        nome: "Seoul",
        pais: "Coreia do sul",
        imagem: "./assets/carrossel/seoul.png",
        avaliacao: "4,8",
        reviews: "612",
        preco: "R$ 3.420,00"
    }
];

function carregarDestinos() {
    destinos.forEach(destino => {
        const cartaoHTML = `
            <div class="cartao-destino">
                <img src="${destino.imagem}" alt="${destino.nome}" class="foto-destino">
                <div class="info-destino">

                    <div class="linha-titulo">
                        <h3 class = "t-h3">${destino.nome}</h3>
                        <div class = "avalicacao">
                            <span class="avaliacao">
                                <img src="./assets/star.svg" alt="" class= "estrela"> ${destino.avaliacao} <sub class="subs">(${destino.reviews} Reviews)</sub>
                            </span>
                        </div>
                    </div>

                    <div class="linha-preco">
                        <span class="pais"><img src="./assets/pino.svg" alt=""> ${destino.pais}</span>
                        <span class="preco">${destino.preco}</span>
                    </div>
                </div>
            </div>
        `;
        
        // Injeta o cartão dentro do trilho
        trilho.innerHTML += cartaoHTML;
    });
}

// 4. Função para calcular a largura dinâmica do slide (executada apenas no clique)
const calcularLarguraDoSlide = () => {
    const primeiroCartao = trilho.querySelector(".cartao-destino");
    if (!primeiroCartao) return 0; // Prevenção caso não existam cartões
    return primeiroCartao.getBoundingClientRect().width + 24; // Cartão + 24px de gap
};

// 5. INICIALIZAÇÃO DO PROCESSO
// Primeiro: Injeta os elementos na tela
carregarDestinos();

// Segundo: Ativa os ouvintes de clique agora que os cartões existem
avancar.addEventListener("click", () => {
    trilho.scrollBy({ left: calcularLarguraDoSlide(), behavior: "smooth" });
});

retornar.addEventListener("click", () => {
    trilho.scrollBy({ left: -calcularLarguraDoSlide(), behavior: "smooth" });
});