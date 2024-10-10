const ratingButtons = document.querySelectorAll('.rating-btn');
let selectedRating = null;
const submitButton = document.querySelector('.submit-btn');
const ratingState = document.getElementById('rating-state');
const thankYouState = document.getElementById('thank-you-state');
const selectedRatingDisplay = document.getElementById('selected-rating');

submitButton.addEventListener('click', () => {
    if (selectedRating) {
        selectedRatingDisplay.textContent = selectedRating;
        ratingState.classList.add('hidden');
        thankYouState.classList.remove('hidden');
    } else {
        alert('Please select a rating before submitting');
    }
});
//

ratingButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation(); 
        selectedRating = button.textContent;
        ratingButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

document.addEventListener('click', () => {
    ratingButtons.forEach(button => button.classList.remove('active')); // Remove a classe 'active' de todos os botões
});
