document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.getElementById('cardContainer');
    const cards = cardContainer.querySelectorAll('.card');
    const totalCards = cards.length;
    const n = 50;
    const containerCenterX = cardContainer.clientWidth / 2;
    const containerCenterY = cardContainer.clientHeight - 100; // Adjust to place the center of the circle correctly

    function spreadCards() {
        for (let a=0; a<n; a++){
            const radiusOuter = 300; // Radius of the half-circle
            const angleOuter = Math.PI * a / (n - 1);
            const xOuter = containerCenterX + radiusOuter * Math.cos(angleOuter) - cards[a].clientWidth / 2;
            const yOuter = containerCenterY - radiusOuter * Math.sin(angleOuter) - cards[a].clientHeight / 2;

            cards[a].style.left = `${xOuter}px`;
            cards[a].style.top = `${yOuter}px`;

            let rotationAngle;
            if (a === 0) {
                rotationAngle = Math.PI / 2; // First card horizontal
            } else if (a === n - 1) {
                rotationAngle = -Math.PI / 2; // Last card horizontal
            } else {
                rotationAngle = (-angleOuter)+Math.PI/2 ; // Other cards
            }

            cards[a].style.transform = `rotate(${rotationAngle}rad)`;
        }

        let m = totalCards-n;
        for (i=n; i<totalCards; i++){
            const radiusInner = 150; // Radius of the half-circle
            const angleInner = Math.PI * (i-n) / (m - 1);
            const xInner = containerCenterX + radiusInner * Math.cos(angleInner) - cards[i].clientWidth / 2;
            const yInner = containerCenterY - radiusInner * Math.sin(angleInner) - cards[i].clientHeight / 2;

            cards[i].style.left = `${xInner}px`;
            cards[i].style.top = `${yInner}px`;

            let rotationAngle;
            if (i === n) {
                rotationAngle = Math.PI / 2; // First card horizontal
            } else if (i === totalCards - 1) {
                rotationAngle = -Math.PI / 2; // Last card horizontal
            } else {
                rotationAngle = (-angleInner)+Math.PI/2 ; // Other cards
            }

            cards[i].style.transform = `rotate(${rotationAngle}rad)`;
        }
        
    }

    function resetCards() {
        cards.forEach(card => {
            card.style.left = '';
            card.style.top = '';
            card.style.transform = '';
        });
    }

    function handleResize() {
        if (window.innerWidth > 600) {
            resetCards();
            cardContainer.classList.add('spread');
            spreadCards();
        } else {    
            resetCards();
            cardContainer.classList.remove('spread');
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    /*const mediaQuery = window.matchMedia('(min-width: 600px)');
    if (mediaQuery.matches) {
        resetCards();
        spreadCards();
    }
    mediaQuery.addEventListener('change', (e) => {
        if (e.matches) {
            resetCards();
            cardContainer.style.display = 'relative';
            cardContainer.style.height = '500px';
            spreadCards();
        } else { 
            cards.forEach(card => {
                resetCards();
            });
        }
    });*/

    //spreadCards();
});

/*document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.getElementById('cardContainer');
    const cards = cardContainer.querySelectorAll('.card');
    const totalCards = cards.length;
    const radius = 400; // Radius of the half-circle
    const containerCenterX = cardContainer.clientWidth / 2;
    const containerCenterY = cardContainer.clientHeight - 100; // Adjust to place the center of the circle correctly

    function spreadCards() {
        cards.forEach((card, index) => {
            const angle = Math.PI * index / (totalCards - 1);
            const x = containerCenterX + radius * Math.cos(angle) - card.clientWidth / 2;
            const y = containerCenterY - radius * Math.sin(angle) - card.clientHeight / 2;

            card.style.left = `${x}px`;
            card.style.top = `${y}px`;

            // Determine the rotation angle to keep the first and last cards horizontal and the center card upright
            let rotationAngle;
            if (index === 0) {
                rotationAngle = Math.PI / 2; // First card horizontal
            } else if (index === totalCards - 1) {
                rotationAngle = -Math.PI / 2; // Last card horizontal
            } else {
                rotationAngle = (-angle)+Math.PI/2 ; // Other cards
            }

            card.style.transform = `rotate(${rotationAngle}rad)`;
        });
    }

    spreadCards();
});
*/