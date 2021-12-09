"use strict";

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


const isChecked = true,
    isClose = true;

// console.log(isCheked && isClose);
// console.log(isChecked || isClose);
console.log(isChecked || !isClose);