// 1. Mudamos para querySelectorAll para capturar TODOS os subtítulos da página
const titulos = document.querySelectorAll('.subtitulo');

const options = {
    root: null,         
    rootMargin: '-50px 0px -50px 0px', 
    threshold: 0.05     
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // CORREÇÃO: Usamos 'entry.target' para aplicar a classe especificamente 
        // no elemento que acabou de entrar/sair da tela
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, options);

// 2. Como 'titulos' agora é uma lista, mandamos o observer assistir cada um deles
titulos.forEach(titulo => {
    observer.observe(titulo);
});