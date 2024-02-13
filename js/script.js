'use strict';

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

console.log(2 + 2 * 2 != 8); 
