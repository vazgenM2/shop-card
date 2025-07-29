 document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.card');

            cards.forEach(card => {
                card.addEventListener('click', () => {
                    // Remove 'opened' class from all cards
                    cards.forEach(c => c.classList.remove('opened'));
                    // Add 'opened' class to the clicked card
                    card.classList.add('opened');
                });
            });
        });

       