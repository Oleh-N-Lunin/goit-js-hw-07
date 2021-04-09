/* 
Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

    Создай переменную counterValue в которой будет хранится текущее значение счетчика.
    Создай функции increment и decrement для увеличения и уменьшения значения счетчика
    Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

*/

/* 
    <div id="counter">
       <button type="button" data-action="decrement">-1</button>
       <span id="value">0</span>
       <button type="button" data-action="increment">+1</button>
    </div>
*/

// В спане будем изменять textContent

const refs = {
    increment: document.querySelector('button[data-action="increment"]'),
    decrement: document.querySelector('button[data-action="decrement"]'),
    counterValue: document.querySelector('#value'),
};

let value = 0;

function render() {
    refs.counterValue.textContent = value
};

refs.increment.addEventListener('click', onIncrementClick);
function onIncrementClick(event) {
    value += 1;
    render()
};

refs.decrement.addEventListener('click', onDecrementClick);
function onDecrementClick(event) {
    value -= 1;
    render()
};