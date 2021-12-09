// 1. Переменные
// const firstName = 'Vitaliy'
// const Age = 35
// const isProgrammer = true // boolean

// 2. Мутирование
// console.log('Имя человека : ' + firstName + ', а возраст: ' + Age)
// const lastName = prompt('Введите фамилию')
// alert(firstName + '' + lastName)

// 3. Операторы +, -, *, /, ++, --
// let currentYear = 2020
// const bithYear = 1993
// const age = currentYear - bithYear
// console.log(age)
// const a = 10
// const b = 5
// let c = 32
// c = c + a
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c)

// 4. Типы данных
// const isProgrammer = true
// const name = 'Vitaliy'
// const age = 26
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null)

// 5. Приоритет операторов
// const fullAge = 26
// const birthYear = 1993
// const currentYear = 2020

// const isFullAge = currentYear - birthYear >= fullAge
// console.log(isFullAge)

// 6. Условные операторы

// const courseStatus = 'pending' // ready, fail, pending

// if (courseStatus == 'ready') {
//     console.log('Курс уже готов')
// } else if (courseStatus == 'pending') {
//     console.log('Курс в разработке')
// } else {
//     console.log('Курс не работает')
// }

// Тернарное выражение
// isReady ? console.log('Все готово') : console.log('Все не готово!')

// 7. Функции
// function calculateAge(year) {
//     return 2020 - year
// }

// const year = 1993
// const myAge = calculateAge(year)
// console.log(myAge)

// 8.Массивы
// const cars = ['Мазда', 'Мерседес', 'Форд']
// const cars = new Array('Мазда', 'Мерседес', 'Форд')
// const cars = ['Мазда', 'Мерседес', 'Форд']
// console.log(cars.length) Длина массива cars
// cars[0] = 'Porshe'
// cars[3] = 'Mazda'
// console.log(cars)

// 10. Циклы
// const cars = ['Мазда', 'Мерседес', 'Форд']

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }

// for (let car of cars) {
//     console.log(car)
// }

// 11. Объекты
// const person = {
//     firstName: 'Vitaliy',
//     lastName: 'Kudinov',
//     year: 1986,
//     languages: ['Ru', 'En', 'Ua'],
//     hasWife: false,
//     greet: function() {
//         console.log('greet')
//     }
// }

// console.log(person.firstName)
// console.log(person['lastName'])
// const key = 'languages'
// console.log(person[key])
// person.hasWife = true
// person.isProgammer = true
// console.log(person)