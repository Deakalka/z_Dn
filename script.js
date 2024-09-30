const card = document.getElementById('card');
const button = document.querySelector('.btn');
const flower = document.getElementById('flower');

button.addEventListener('click', () => {
    // Випадкове зміщення картки
    var locationX = card.style.marginLeft = `${Math.floor(Math.random() * 700) - 50}px`;  // Додаємо випадкове зміщення вліво/вправо
    var locationY = card.style.marginTop = `${Math.floor(Math.random() * 400) - 25}px`;    // Додаємо випадкове зміщення вгору/вниз

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
