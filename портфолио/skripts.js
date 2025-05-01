document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelector('.cardCarouse');
    const nextButton = document.querySelector('.arrow_next');
    const prevButton = document.querySelector('.arrow_back');
    const cards = document.querySelectorAll('.infoCardPhoto');
    const indicatorContainer = document.querySelector('.indetfic'); // контейнер для точек

    if (!carousels || !nextButton || !prevButton || cards.length === 0 || !indicatorContainer) return;

    let currentIndex = 0;
    let indicators = [];

    // Создаем индикаторы по количеству карточек
    cards.forEach((_, index) => {
        const btn = document.createElement('button');
        btn.classList.add('identifier');
        if (index === 0) btn.classList.add('active'); // первая активная
        btn.addEventListener('click', () => {
            scrollToCard(index);
        });
        indicatorContainer.appendChild(btn);
        indicators.push(btn);
    });

    function scrollToCard(index) {
        // Сброс активных классов
        cards.forEach(card => card.classList.remove('active'));
        indicators.forEach(dot => dot.classList.remove('active'));

        // Установка активных
        cards[index].classList.add('active');
        indicators[index].classList.add('active');

        // Прокрутка
        cards[index].scrollIntoView({
            behavior: 'smooth',
            inline: 'start'
        });

        currentIndex = index;
    }

    // Навигация стрелками
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            scrollToCard(currentIndex - 1);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < cards.length - 1) {
            scrollToCard(currentIndex + 1);
        }
    });

    scrollToCard(currentIndex); // инициализация
});
