// Mudamos o nome para 'cardElement' e 'observerCards' para não chocar com o do título
const cardElement = document.querySelector('.cards');

const optionsCards = {
    root: null,         
    rootMargin: '-50px 0px -50px 0px', 
    threshold: 0.05     
};

const observerCards = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, optionsCards);

// Verifica se o elemento realmente existe antes de observar (evita erros no console)
if (cardElement) {
    observerCards.observe(cardElement);
}