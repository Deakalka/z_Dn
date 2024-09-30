const card = document.getElementById('card');
const button = document.querySelector('.btn');
const flower = document.getElementById('flower');
const surprise = document.getElementById('surprise');
const videoContainer = document.querySelector('.video-container');


button.addEventListener('click', () => {
    surprise.style.display = 'block';
    videoContainer.style.display = 'block';

    // Випадкове зміщення картки
    var locationX = card.style.marginLeft = `${Math.floor(Math.random() * 100) - 50}px`;  // Додаємо випадкове зміщення вліво/вправо
    var locationY = card.style.marginTop = `${Math.floor(Math.random() * 40) - 25}px`;    // Додаємо випадкове зміщення вгору/вниз

    // Додаємо напис і квітку
    button.textContent = 'Давай ще раз!';
    flower.style.display = 'block'; // Показуємо квітку

    // Через 2 секунди ховаємо квітку
    setTimeout(() => {
        flower.style.display = 'none';  // Ховаємо квітку
        flower.style.marginLeft = locationX;
        flower.style.marginTop = locationY; 
        button.textContent = 'Натисни для сюрпризу'; // Відновлюємо початковий текст кнопки
    }, 2000);
});

