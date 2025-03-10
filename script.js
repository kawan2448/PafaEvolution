// Exemplo simples de interação para a galeria
document.querySelectorAll('.gallery img').forEach((img) => {
    img.addEventListener('click', () => {
        alert('Você clicou em uma imagem!');
    });
});
function toggleVisibility(id) {
    const element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
// Seleciona todas as perguntas clicáveis
const faqQuestions = document.querySelectorAll('.faq-question');

// Adiciona um evento de clique a cada pergunta
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Pega a resposta associada à pergunta clicada
        const answer = question.nextElementSibling;

        // Se a resposta estiver visível, esconda
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            // Caso contrário, mostre a resposta
            answer.style.display = 'block';
        }
    });
});
// Seleciona todos os itens FAQ
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const questionButton = item.querySelector('.faq-question');
  questionButton.addEventListener('click', () => {
    // Verifica se o item já está aberto (se ele tem a classe "active")
    const isActive = item.classList.contains('active');

    // Fecha todos os itens
    faqItems.forEach(otherItem => {
      otherItem.classList.remove('active');
    });

    // Se o item clicado não estava aberto, abre ele
    if (!isActive) {
      item.classList.add('active');
    }
  });
});
// Seleciona todos os links de navegação
const menuButtons = document.querySelectorAll('.menu-btn');

// Adiciona um evento de clique para alternar a classe 'active'
menuButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove a classe 'active' de todos os botões
        menuButtons.forEach(btn => btn.classList.remove('active'));

        // Adiciona a classe 'active' ao botão clicado
        button.classList.add('active');
    });
});
