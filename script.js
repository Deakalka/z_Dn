function showSurprise() {
    document.getElementById('surprise').style.display = 'block';
}

function moveCard() {
    const card = document.getElementById('card');
    const flower = document.getElementById('flower');

    // Генеруємо випадкові координати для зміщення картки
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;

    // Зміщуємо картку на випадкову позицію
    card.style.transform = `translate(${randomX}px, ${randomY}px)`;

    // Показуємо квітку
    flower.style.display = 'block';
}
