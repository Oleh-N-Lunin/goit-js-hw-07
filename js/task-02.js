// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ingredientsMarkup = items => {
    return items.map(item => {
        const itemRef = document.createElement('li');
        itemRef.textContent = item;

        return itemRef;
    });
};

const ingredientsItems = ingredientsMarkup(ingredients);
const ingredientsRef = document.querySelector('#ingredients');

ingredientsRef.append(...ingredientsItems);
