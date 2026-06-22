const titulo = document.querySelector('.subtitulo');

const options = {
    root: null,         // Usa a tela do navegador como referência
    rootMargin: '-50px 0px -50px 0px', // Ativa o efeito 50px antes/depois das bordas da tela
    threshold: 0.05     // Dispara assim que 5% do elemento cruzar a margem
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            titulo.classList.add('show');
        } else {
            titulo.classList.remove('show');
        }
    });
}, options);

observer.observe(titulo);

