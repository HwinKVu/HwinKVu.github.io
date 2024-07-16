const cardData = [
    { value: 'The Fool', img: './tarotoriginal/0.jpeg'},
    { value: 'The Magician', img: './tarotoriginal/1.jpeg' },
    { value: 'The High Priestess', img: './tarotoriginal/2.jpeg' },
    { value: 'The Empress', img: './tarotoriginal/3.jpeg' },
    { value: 'The Emperor', img: './tarotoriginal/4.jpeg'},
    { value: 'The Hierophant', img: './tarotoriginal/5.jpeg' },
    { value: 'The Lovers', img: './tarotoriginal/6.jpeg' },
    { value: 'The Chariot', img: './tarotoriginal/7.jpeg' },
    { value: 'Strength', img: './tarotoriginal/8.jpeg'},
    { value: 'The Hermit', img: './tarotoriginal/9.jpeg' },
    { value: 'Wheel of Fortune', img: './tarotoriginal/10.jpeg'},
    { value: 'Justice', img: './tarotoriginal/11.jpeg'},
    { value: 'The Hanged Man', img: './tarotoriginal/12.jpeg'},
    { value: 'Death', img: './tarotoriginal/13.jpeg'},
    { value: 'Temperance', img: './tarotoriginal/14.jpeg' },
    { value: 'The Devil', img: './tarotoriginal/15.jpeg'},
    { value: 'The Tower', img: './tarotoriginal/16.jpeg'},
    { value: 'The Star', img: './tarotoriginal/17.jpeg' },
    { value: 'The Moon', img: './tarotoriginal/18.jpeg' },
    { value: 'The Sun', img: './tarotoriginal/19.jpeg' },
    { value: 'Judgement', img: './tarotoriginal/20.jpeg'},
    { value: 'The World', img: './tarotoriginal/21.jpeg'},
    { value: 'Ace of Cups', img: './tarotoriginal/cup1.jpeg'},
    { value: 'Two of Cups', img: './tarotoriginal/cup2.jpeg' },
    { value: 'Three of Cups', img: './tarotoriginal/cup3.jpeg'},
    { value: 'Four of Cups', img: './tarotoriginal/cup4.jpeg'},
    { value: 'Five of Cups', img: './tarotoriginal/cup5.jpeg'},
    { value: 'Six of Cups', img: './tarotoriginal/cup6.jpeg'},
    { value: 'Seven of Cups', img: './tarotoriginal/cup7.jpeg'},
    { value: 'Eight of Cups', img: './tarotoriginal/cup8.jpeg'},
    { value: 'Nine of Cups', img: './tarotoriginal/cup9.jpeg'},
    { value: 'Ten of Cups', img: './tarotoriginal/cup10.jpeg'},
    { value: 'Page of Cups', img: './tarotoriginal/cup11.jpeg'},
    { value: 'Knight of Cups', img: './tarotoriginal/cup12.jpeg'},
    { value: 'Queen of Cups', img: './tarotoriginal/cup13.jpeg'},
    { value: 'King of Cups', img: './tarotoriginal/cup14.jpeg'},
    { value: 'Ace of Pentacles', img: './tarotoriginal/pen1.jpeg'},
    { value: 'Two of Pentacles', img: './tarotoriginal/pen2.jpeg'},
    { value: 'Three of Pentacles', img: './tarotoriginal/pen3.jpeg'},
    { value: 'Four of Pentacles', img: './tarotoriginal/pen4.jpeg'},
    { value: 'Five of Pentacles', img: './tarotoriginal/pen5.jpeg'},
    { value: 'Six of Pentacles', img: './tarotoriginal/pen6.jpeg'},
    { value: 'Seven of Pentacles', img: './tarotoriginal/pen7.jpeg'},
    { value: 'Eight of Pentacles', img: './tarotoriginal/pen8.jpeg'},
    { value: 'Nine of Pentacles', img: './tarotoriginal/pen9.jpeg'},
    { value: 'Ten of Pentacles', img: './tarotoriginal/pen10.jpeg'},
    { value: 'Page of Pentacles', img: './tarotoriginal/pen11.jpeg' },
    { value: 'Knight of Pentacles', img: './tarotoriginal/pen12.jpeg'},
    { value: 'Queen of Pentacles', img: './tarotoriginal/pen13.jpeg' },
    { value: 'King of Pentacles', img: './tarotoriginal/pen14.jpeg'},
    { value: 'Ace of Wands', img: './tarotoriginal/wand1.jpeg'},
    { value: 'Two of Wands', img: './tarotoriginal/wand2.jpeg'},
    { value: 'Three of Wands', img: './tarotoriginal/wand3.jpeg' },
    { value: 'Four of Wands', img: './tarotoriginal/wand4.jpeg'},
    { value: 'Five of Wands', img: './tarotoriginal/wand5.jpeg'},
    { value: 'Six of Wands', img: './tarotoriginal/wand6.jpeg'},
    { value: 'Seven of Wands', img: './tarotoriginal/wand7.jpeg'},
    { value: 'Eight of Wands', img: './tarotoriginal/wand8.jpeg'},
    { value: 'Nine of Wands', img: './tarotoriginal/wand9.jpeg'},
    { value: 'Ten of Wands', img: './tarotoriginal/wand10.jpeg'},
    { value: 'Page of Wands', img: './tarotoriginal/wand11.jpeg'},
    { value: 'Knight of Wands', img: './tarotoriginal/wand12.jpeg' },
    { value: 'Queen of Wands', img: './tarotoriginal/wand13.jpeg'},
    { value: 'King of Wands', img: './tarotoriginal/wand14.jpeg'},
    { value: 'Ace of Swords', img: './tarotoriginal/sword1.jpeg'},
    { value: 'Two of Swords', img: './tarotoriginal/sword2.jpeg'},
    { value: 'Three of Swords', img: './tarotoriginal/sword3.jpeg'},
    { value: 'Four of Swords', img: './tarotoriginal/sword4.jpeg'},
    { value: 'Five of Swords', img: './tarotoriginal/sword5.jpeg'},
    { value: 'Six of Swords', img: './tarotoriginal/sword6.jpeg'},
    { value: 'Seven of Swords', img: './tarotoriginal/sword7.jpeg'},
    { value: 'Eight of Swords', img: './tarotoriginal/sword8.jpeg'},
    { value: 'Nine of Swords', img: './tarotoriginal/sword9.jpeg'},
    { value: 'Ten of Swords', img: './tarotoriginal/sword10.jpeg'},
    { value: 'Page of Swords', img: './tarotoriginal/sword11.jpeg' },
    { value: 'Knight of Swords', img: './tarotoriginal/sword12.jpeg'},
    { value: 'Queen of Swords', img: './tarotoriginal/sword13.jpeg'},
    { value: 'King of Swords', img: './tarotoriginal/sword14.jpeg'},
];


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function assignCardValues() {
    const shuffledCardData = shuffle(cardData);
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
        const state = Math.random() > 0.5 ? 'upright' : 'reversed'; // Randomly assign state
        card.setAttribute('data-value', shuffledCardData[index].value);
        card.setAttribute('data-img', shuffledCardData[index].img);
        card.setAttribute('data-state', state);
        card.style.backgroundImage = ''; // No image initially
    });
}


function displayCardValues() {
    const newSiteCards = document.querySelectorAll('#selectedCard .card');
    newSiteCards.forEach(card => {
        const state = card.getAttribute('data-state');
        //card.innerText = card.getAttribute('data-value'); // Display the card value
        card.style.backgroundImage = `url(${card.getAttribute('data-img')})`;
        card.style.backgroundSize = 'cover';
        card.style.backgroundPosition = 'center';

        if (state === 'reversed') {
            card.style.transform = 'rotate(180deg)'; // Apply 180-degree rotation if reversed
        }
    });
}

let cardsMoved = 0;
let canClick = true;


function moveCard(cardId) {
    // Get the card element
    const card = document.getElementById(cardId);

    // Get the new site element
    const newSite = document.getElementById('selectedCard');

    // Append the card to the new site
    newSite.appendChild(card);

    cardsMoved += 1;

    if (cardsMoved === 5) {
        displayCardValues();
        canClick = false;
        document.body.classList.add('disable-hover');
    }
}

window.onload = function() {
    assignCardValues();

    // Add click event listeners to all cards
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function() {
            if (canClick) {
                moveCard(this.id);
            }
        });
    });
};
