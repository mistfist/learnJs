// "use strict";

// Переменные и строгий режим
// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

//1.Типы данных
// console.log(-4 / 0);
// console.log('string' * 9);

// let und;
// console.log(und);

// const obj = {
//     name: 'John',
//     age: 25,
//     isMarried: false
// };

// console.log(obj.age);
// console.log(obj['name']);

// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {},
//     []
// ];
// console.log(arr[1]);

// 2.Простые общения с пользованием

// const result = confirm('Your name Vasya?');
// console.log(result);
// const result2 = prompt('Your name Vasya?', 'Да');
// console.log(result2); // String
// const result3 = +prompt('Сколько вам лет', '35');
// console.log(result3 + 5); // Number

// const answer = [];

// answer[0] = prompt('Как ваше имя?', '');
// answer[1] = prompt('Как ваша фамилия?', '');
// answer[2] = prompt('Сколько вам лет?', '');

// document.write(answer);

// 3.Интерполяция

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";

// alert(`Привет, ${user}`)

//  Операторы 

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

// console.log(++incr);
// console.log(--decr);

// console.log(5 % 2);

// console.log(2 * 4 == '9');


// const isChecked = true,
//     isClose = true;

// console.log(isCheked && isClose);
// console.log(isChecked || isClose);
// console.log(isChecked || !isClose);

// Циклы
// let num = 50;

// while (num <= 50) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }

// while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);

// }


// Функции, стрелочные функции

// function showFirstMessage() {
//     console.log("Hello World!");
// }

// showFirstMessage();

// function ret() {
//     let num = 50;

//     return num;
// }

// Функции декларейшн  - Создается до начала выполнения скрипта, можн вызвать перед объявлением
// const anotherNum = ret();
// console.log(anotherNum);

// Функции экспрешн - создается только тогда, когда доходит поток кода, можно вызвать только после объявления
// const logger = function() {
//     console.log("Hello");
// };

// logger();

// Стрелочные
// const calc = (a, b) => { return a + b };

// Методы и свойства строк и чисел
// const str = "test";
// const arr = [1, 2, 4];

// console.log(str.length);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// const fruit = "Some fruit";
// console.log(fruit.indexOf("fruit"));

// const logg = "Hello world";
// console.log(logg.slice(6, 10));

// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));