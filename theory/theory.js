'use strict'
const dom = document.querySelector('#dom');
dom.nextSibling; //позволяет получить следующую ноду
dom.nextElementSibling;

dom.previousSibling; //позволяет получить предыдущую ноду
dom.previousElementSibling;

dom.firstChild;
dom.firstElementChild;

dom.parentElement;
dom.parentNode;

dom.closest('.item-front');

//classList операции с классами

dom.classList.add('green, red');
dom.classList.remove('green, red');
dom.classList.toggle('red');
dom.classList.contains('black'); // проверка на наличие класса
dom.matches('.black'); // проверка на наличие любого элемента, класса или id
dom.matches('#dom.props__item[title="foo"]'); // проверка на наличие любого элемента

//className
dom.className = 'new__class'; // затирает все имеющиеся классы. использовать только при создании новых элементов.


//Редактирование атрибутов
dom.id;
dom.title;
const logo = document.querySelector('.logo');
logo.src;
console.log(logo.alt);
logo.alt = 'Method logo';

const link = document.querySelector('.link');
link.href = 'https://google.com#test';
link.hash = '#test';

// Методы для работы с атрибутами
console.log(link.hasAttribute('href')
);
console.log(link.getAttribute('href') // получить атрибут
);

link.setAttribute('href','https://yahoo.com'); // записать атрибут
console.log(link.getAttribute('href')
);

link.removeAttribute('href'); //удалить атрибут
console.log(link.attributes); // получить все атрибуты элемента


//Дата атрибуты и вставка
// const dom = document.querySelector('#dom');
// const logo = document.querySelector('.logo');
const ajax = document.querySelector('.ajax'); //получили ноду

const ajaxText = ajax.dataset.text; //получили текст из атрибута data-text=""

// const text = document.createTextNode(ajaxText);
// ajax.append(text);
ajax.textContent += ajaxText; // добавили текст в ноду

dom.innerHTML; // полностью тег с версткой
dom.innerHTML = `<a>Привет мир</a>`
dom.outerHTML; // тег с версткой и еще родитель
dom.outerHTML = `<li><a>Привет мир</a></li>`;

const title = document.querySelector('.title-items_front');
title.innerHTML += `<i>Hello</i>`;
const i = title.querySelector('i');
title.innerHTML += ' <em>world!</em>';
i.textContent = 'Привет';

title.insertAdjacentHTML('beforeend', ' <i>Hello</i>');
title.insertAdjacentHTML('afterbegin', '<i>Hello</i> ');

// beforebegin
// <h2>
// afterbegin
// #content
// beforeend
// </h2>
// afterend

title.insertAdjacentText('beforeend', ' Hello');
title.insertAdjacentText('afterbegin', 'Hello ');

title.insertAdjacentElement('beforebegin', logo); // вставили целый элемент - логотип перед h2

// Стили в DOM

//Изменение стилей
const n = 90;

const front = document.querySelector('.item-front');
front.style.color = 'green';
front.style.backgroundColor = 'black';
front.style.fontSize = n + '50px';
front.style; // вывод все свойств
front.style.cssText = `
color: green;
background-color: black;
transform: rotate(${n}deg);
` // много свойств сразу

//Для чтения стилей:
const styled = getComputedStyle(front, 'after'); // можно также получить псевдоэлемент
console.log('styled: ', styled);
console.log('styled: ', styled.content); // получили стиль контент элемента after

console.log('styled: ', styled.background);
console.log('styled: ', styled.font);
console.log('styled: ', styled.padding);

console.log(front.getBoundingClientRect()); // расстояния в зависимости от окна браузера
