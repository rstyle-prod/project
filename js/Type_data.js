'use strict';

/**
 * Числовые данные
 */
let number =4.6; // Целые и дробные числа, только с точкой(!)

console.log(4/0); // Infinity
console.log(-4/0); // -Infinity
console.log('string' * 9); // NaN (Not a Number)

/**
 * Строка
 */
const persone = 'Alex';
const persone2 = 'Alex'; // Кавычки с помощью ``
const persone3 = '5'; // Тоже строка

const bool = false; // or true


console.log(something); // null - нет переменной

let und;
console.log(und); // undefined, есть переменная, но в ней ничего нет

/**
 * Объект
 */
const obj = {
	name: 'John',
	age: 25,
	isMarried: false
};

console.log(obj.name);
console.log(obj['name']);

/**
 * Массив
 */
let arr = ['plum.png', 'orange.jpeg', 6, 'apple.bmp', {}, []];
console.log(arr[1]);

/***************************** */
const arr = [1, 2, 3];
arr[10] = '3456';
console.log(arr); //[ 1, 2, 3, <7 empty items>, '3456' ]
console.log(arr[5]); //undefined

const arrObj = {
	/* Внутри объекта могуть быть также массивы или другие объекты */
	a: 1,
	'1': 2,
	2: 3,
	abc: {
		df: [{}, {}],
		def: {
            
		}
	}
};

const b = 'b';
//console.log(arr[1]);
//console.log(arrObj.a); // К цифрам обращаться через точку нельзя, ошибка
//console.log(arrObj[1]);

//arrObj.b = '1234';
arrObj[b] = '1234';
console.log(arrObj['b']);
console.log(arrObj.b);

const obj = {a: 1, b:2, c:3};
console.log(obj.a);

const obj2 = { //Пофиг с кавычками или нет, js сам поймет
	Anna: 500,
	'Alice': 800
};

/********** */

//alert('Hello');

//const result = confirm('Are you here?');
//console.log(result);

//const answer = +prompt('Вам есть 18?','18'); // Если не будет + то ответ ВСЕГДА БУДЕТ ЫЕКШТП
//console.log(typeof(answer));

const answers = [];
answers[0] = prompt('Как Ваше имя?', '');
answers[1] = prompt('Как Ваша фамилия?', '');
answers[2] = prompt('Сколько Вам лет?', '');

//document.write(answers);

//console.log(typeof(answers));

/******* */

const category = 'toys';

//console.log('https://someurl.com/' +category); //https://someurl.com/toys
//console.log('https://someurl.com/' +category + '/' + '4'); // https://someurl.com/toys/4

//console.log(`https://someurl.com/${category}`); // https://someurl.com/toys ТОЛЬКО ЕСЛИ КАВЫЧКИ ЧЕРЕЗ ТИЛЬДУ

const user = 'Ivan';
alert(`Привет, ${user}`);

/****** */
console.log('arr' + ' - object'); //arr - object
console.log(4 + ' - object'); //4 - object
console.log(4 + + '- object'); //NaN
console.log(4 + + '5'); //9

let incr = 10,
	decr = 10;

//incr++; // +1
//decr--; // -1
//++incr; // +1
//--decr; // -1

/* Внутри вывода если использовать ++ или -- после переменной ничего не поменяется
   Если в начале переменной то значения поменяются*/
console.log(++incr);
console.log(decr--);

console.log(5%2); //1

console.log(2*4 == 8); //Сравнивание происходит двумя знаками ==. Сравнивание идет только по значению, а не ТИПУ данных
console.log(2*4 === '8'); //Будет FALSE т.к === сравнивает еще и по ТИПУ

const isChecked = true,
	isClose = false;

console.log(isChecked && isClose); // Если оба выражения правдивы (true) то будет TRUE
console.log(isChecked || isClose); // Если одно выражение правдиво (true) то будет TRUE

console.log(!isChecked || isClose); // Если перед переменной поставить оператор отрицания! то оно меняет значение на другое

console.log(2 + 2 * 2 == 8); 


