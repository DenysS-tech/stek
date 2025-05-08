document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.cardCarouse-inner');
    const next = document.querySelector('.arrow_next');
    const prev = document.querySelector('.arrow_back');
    const indicatorContainer = document.querySelector('.indetfic');
    const cards = document.querySelectorAll('.infoCardPhoto');

    const cardWidth = 380;
    const gap = 30;
    const cardsPerPage = 3;
    const totalPages = Math.ceil(cards.length / cardsPerPage);
    let pageIndex = 0;

    // Создаем точки по количеству страниц (а не карточек!)
    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('button');
        dot.classList.add('identifier');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => scrollToPage(i));
        indicatorContainer.appendChild(dot);
    }

    const indicators = document.querySelectorAll('.identifier');

    function scrollToPage(index) {
        pageIndex = Math.max(0, Math.min(index, totalPages - 1));
        const offset = pageIndex * cardsPerPage * (cardWidth + gap);
        container.style.transform = `translateX(-${offset}px)`;

        indicators.forEach(dot => dot.classList.remove('active'));
        indicators[pageIndex].classList.add('active');
    }

    next.addEventListener('click', () => {
        if (pageIndex < totalPages - 1) scrollToPage(pageIndex + 1);
    });

    prev.addEventListener('click', () => {
        if (pageIndex > 0) scrollToPage(pageIndex - 1);
    });

    scrollToPage(0); // начальная инициализация
});

  