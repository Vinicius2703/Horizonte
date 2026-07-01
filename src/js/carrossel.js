// ==========================================
// 1. Bancos de Dados (Arrays de Objetos)
// ==========================================
const destinosInternacionais = [
    { nome: "Capadócia", pais: "Turquia", imagem: "./assets/carrossel/capadocia.png", avaliacao: "4,8", reviews: "497", preco: "R$ 3.600,00" },
    { nome: "Vancouver", pais: "Canadá", imagem: "./assets/carrossel/vancouver.png", avaliacao: "4,7", reviews: "452", preco: "R$ 3.650,00" },
    { nome: "Paris", pais: "França", imagem: "./assets/carrossel/paris.png", avaliacao: "4,2", reviews: "932", preco: "R$ 3.420,00" },
    { nome: "California", pais: "EUA", imagem: "./assets/carrossel/california.png", avaliacao: "4,5", reviews: "612", preco: "R$ 3.420,00" },
    { nome: "Seoul", pais: "Coreia do sul", imagem: "./assets/carrossel/seoul.png", avaliacao: "4,8", reviews: "612", preco: "R$ 3.420,00" }
];

const destinosNacionais = [
    { nome: "Recife", pais: "Pernambuco", imagem: "./assets/carrossel/recife.png", avaliacao: "4,9", reviews: "812", preco: "R$ 2.900,00" },
    { nome: "Salvador", pais: "Bahia", imagem: "./assets/carrossel/salvador.png", avaliacao: "4,9", reviews: "812", preco: "R$ 2.900,00" },
    { nome: "ipanema", pais: "Rio de Janeiro", imagem: "./assets/carrossel/ipanema.png", avaliacao: "4,9", reviews: "812", preco: "R$ 2.900,00" },
    { nome: "Curitiba", pais: "Paraná", imagem: "./assets/carrossel/curitiba.png", avaliacao: "4,9", reviews: "812", preco: "R$ 2.900,00" },
]

// ==========================================
// 2. Função Unificada de Carregamento (Usa parâmetros!)
// ==========================================
function carregarDestinos(listaDeDestinos, containerTrilho) {
    if (!containerTrilho) return;

    listaDeDestinos.forEach(destino => {
        const cartaoHTML = `
            <div class="cartao-destino">
                <img src="${destino.imagem}" alt="${destino.nome}" class="foto-destino">
                <div class="info-destino">
                    <div class="linha-titulo">
                        <h3 class="t-h3">${destino.nome}</h3>
                        <div class="avalicacao">
                            <span class="avaliacao">
                                <img src="./assets/star.svg" alt="" class="estrela"> ${destino.avaliacao} <sub class="subs">(${destino.reviews} Reviews)</sub>
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
        // Injeta especificamente no container passado por parâmetro
        containerTrilho.innerHTML += cartaoHTML;
    });
}

// ==========================================
// 3. Função Unificada de Scroll (Mover os trilhos)
// ==========================================
const calcularLarguraDoSlide = (containerTrilho) => {
    const primeiroCartao = containerTrilho.querySelector(".cartao-destino");
    if (!primeiroCartao) return 0; 
    return primeiroCartao.getBoundingClientRect().width + 24; // Cartão + gap
};

function configurarCarrossel(idTrilho, idAvancar, idRetornar) {
    const trilho = document.getElementById(idTrilho);
    const avancar = document.getElementById(idAvancar);
    const retornar = document.getElementById(idRetornar);

    if (!trilho || !avancar || !retornar) return;

    avancar.addEventListener("click", () => {
        trilho.scrollBy({ left: calcularLarguraDoSlide(trilho), behavior: "smooth" });
    });

    retornar.addEventListener("click", () => {
        trilho.scrollBy({ left: -calcularLarguraDoSlide(trilho), behavior: "smooth" });
    });
}

// ==========================================
// 4. INICIALIZAÇÃO DO PROCESSO
// ==========================================

// Pega os dois trilhos diferentes do seu HTML (lembre de checar se os IDs batem)
const trilhoInter = document.getElementById("trilho-inter");
const trilhoNacional = document.getElementById("trilho-nacional");

// Carrega os dados nos respectivos lugares
carregarDestinos(destinosInternacionais, trilhoInter);
carregarDestinos(destinosNacionais, trilhoNacional);

// Configura os botões de cada carrossel de forma totalmente isolada
configurarCarrossel("trilho-inter", "avanca-inter", "volta-inter");
configurarCarrossel("trilho-nacional", "avanca-nacional", "volta-nacional");