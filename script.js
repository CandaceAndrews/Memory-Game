// Array of symbols for the cards
const symbols = ['🍎', '🍌', '🍉', '🍇', '🍒', '🍍', '🍋', '🍓'];

// Duplicate the symbols to create pairs
const cards = ['🍎', '🍌', '🍉', '🍇', '🍒', '🍍', '🍋', '🍓'];

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
