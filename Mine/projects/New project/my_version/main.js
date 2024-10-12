// Seleciona todos os botões de avaliação (1 a 5)
const ratingButtons = document.querySelectorAll('.rating-btn');
let selectedRating = null; // Variável para armazenar o valor selecionado
const submitButton = document.querySelector('.submit-btn'); // Botão de envio
const ratingState = document.getElementById('rating-state'); // Estado inicial de avaliação
const thankYouState = document.getElementById('thank-you-state'); // Estado de agradecimento
const selectedRatingDisplay = document.getElementById('selected-rating'); // Onde será exibido o número selecionado
const starWrapper = document.getElementById('star-wrapper'); // Seleciona o contêiner da estrela

// Quando o botão "Submit" é clicado
submitButton.addEventListener('click', () => {
    if (selectedRating) { // Verifica se algum valor foi selecionado
        selectedRatingDisplay.textContent = selectedRating; // Atualiza o valor da avaliação
        ratingState.classList.add('hidden'); // Esconde o estado de avaliação
        thankYouState.classList.remove('hidden'); // Mostra o estado de agradecimento
        starWrapper.classList.add('hidden'); // Esconde a estrela junto com o estado de avaliação
    } else {
        alert('Please select a rating before submitting'); // Alerta se não houver valor selecionado
    }
});

// Para cada botão de avaliação, adicionar um evento de clique
ratingButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation(); // Previne que o clique em um botão desmarque os outros
        selectedRating = button.textContent; // Atualiza a variável com o valor do botão clicado
        ratingButtons.forEach(btn => btn.classList.remove('active')); // Remove a classe "active" de todos os botões
        button.classList.add('active'); // Adiciona a classe "active" ao botão clicado
    });
});

// Se o usuário clicar em qualquer lugar fora dos botões, desmarca todos
document.addEventListener('click', () => {
    ratingButtons.forEach(button => button.classList.remove('active')); // Remove a classe "active" de todos os botões
});