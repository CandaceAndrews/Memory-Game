// Array of symbols for the cards
const symbols = ['🍎', '🍌', '🍉', '🍇', '🍒', '🍍', '🍋', '🍓'];

// Duplicate the symbols to create pairs
const cards = [...symbols, ...symbols];

// Shuffle the cards
cards.sort(() => Math.random() - 0.5);

// Track flipped cards and matched pairs
let flippedCards = [];
let matchedPairs = 0;

// Function --- flip a card
function flipCard(card) {
    if (flippedCards.length < 2 && !flippedCards.includes(card)) {
        card.textContent = cards[parseInt(card.id) - 1];
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000); //Delay for better user experience
        }
    }
}

// Function --- check if flipped cards match
function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.textContent === card2.textContent) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        flippedCards = [];
        matchedPairs++;

        if (matchedPairs === symbols.length) {
            alert('Congratulations! You won the game!');
        }
    } else {
        setTimeout(() => {
            card1.textContent = '';
            card2.textContent = '';
            flippedCards = [];
        }, 1000); // Delay for card flipping animation
    }
}

// Event --- listen to cards
document.querySelector('.card').forEach(card => {
    card.addEventListener('click', () => flipCard(card));
});