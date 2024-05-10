// Array of symbols for the cards
// const symbols = ['🍎', '🍌', '🍉', '🍇', '🍒', '🍓', '🫐', '🥭', '🥝'];
const characters = ['pictures/alyssa.jpeg',
                    'pictures/bob.jpeg',
                    'pictures/cindy.jpeg',
                    'pictures/david.jpeg',
                    'pictures/george.jpeg',
                    'pictures/jim.jpeg',
                    'pictures/kevin.jpeg',
                    'pictures/mark.jpeg',
                    'pictures/yoko.jpeg'
];

// Duplicate the symbols to create pairs
const cards = [...characters, ...characters];

// Shuffle the cards
cards.sort(() => Math.random() - 0.5);

// Track flipped cards and matched pairs
let flippedCards = [];
let matchedPairs = 0;

// Function --- flip a card
function flipCard(card) {
    const index = [...document.querySelectorAll('.card')].indexOf(card);
    if (flippedCards.length < 2 && !flippedCards.includes(card)) {
        // card.textContent = cards[index];
        card.style.backgroundImage = `url(${cards[index]})`
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 700); //Delay for better user experience
        }
    }
}

// Function --- check if flipped cards match
function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.style.backgroundImage === card2.style.backgroundImage) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        flippedCards = [];
        matchedPairs++;

        // Check if all pairs ae matched
        if (matchedPairs === characters.length) {
            alert('Congratulations! You won the game!');
        }
    } else {
        setTimeout(() => {
            card1.style.backgroundImage = '';
            card2.style.backgroundImage = '';
            flippedCards = [];
        }, 700); // Delay for card flipping animation
    }
}

// Event --- listen to cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => flipCard(card));
});