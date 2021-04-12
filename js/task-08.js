/* 
Напиши скрипт создания и очистки коллекции элементов. 
Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), 
которая принимает 1 параметр amount - число. 
Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

    Имеет случайный rgb цвет фона
    Размеры самого первого div - 30px на 30px
    Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px

Создай функцию destroyBoxes(), которая очищает div#boxes.

<div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div>
*/

const refs = {
    inputAmout: document.querySelector('input'),
    renderBtn: document.querySelector('button[data-action="render"]'),
    destroyBtn: document.querySelector('button[data-action="destroy"]'),
    boxes: document.querySelector('#boxes'),
};

refs.renderBtn.addEventListener('click', createBoxes);

function createBoxes() {
    let currentValue = refs.inputAmout.value;
    for (let i = 0; i < currentValue; i++) {
        const div = document.createElement('div');
        div.style.height = 30+(i*10) +'px';
        div.style.width = 30+(i*10)+'px';
          const randomRgb = () => {
             const rgbNum = () => Math.floor(Math.random() * 256);
             const r = rgbNum();
             const g = rgbNum();
             const b = rgbNum();
             return `rgb(${r},${g},${b})`;
        };
        div.style.backgroundColor = randomRgb()
        refs.boxes.appendChild(div);
    }
};

refs.destroyBtn.addEventListener('click', function() {
    refs.boxes.innerHTML = '';
});
