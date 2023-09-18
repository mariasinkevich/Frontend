"use strict";

//Испытания Хекслет

/*1. "Счастливым" называют билет с номером, в котором сумма первой половины цифр
равна сумме второй половины цифр. Номера могут быть произвольной длины, с единственным
условием, что количество цифр всегда чётно.
Реализуйте функцию, проверяющую является ли номер счастливым (номер — всегда строка).
Функция должна возвращать true, если билет счастливый, или false, если нет.*/

const isHappyTicket = (string) => {
	let len = string.length;
	let c1 = 0, c2 = 0;

	for (let i = 0; i < len; i++) {
		if (i < len / 2) {
			c1 += Number(string[i]);
		}
		else {
			c2 += Number(string[i]);
		}
	}

	return (c1 === c2) ? true : false;
}

//Тесты
console.log(isHappyTicket('385916')); //True
console.log(isHappyTicket('231002')); //False
console.log(isHappyTicket('1222')); //False
console.log(isHappyTicket('054702')); //True
console.log(isHappyTicket('00')); //True


/*2. Реализуйте и экспортируйте по умолчанию функцию, которая меняет в строке регистр
каждой буквы на противоположный. Функция должна возвращать полученный результат*/

const invertCase = (string) => {
	let len = string.length;
	let res = "";

	for (let i = 0; i < len; i++) {
		if (string[i] === string[i].toLowerCase()) {
			res = `${res}${string[i].toUpperCase()}`;
		}
		else {
			res = `${res}${string[i].toLowerCase()}`;
		}
	}
	
	return res;
}

//Тесты
console.log(invertCase('Hello, World!')); //hELLO, wORLD!
console.log(invertCase('I loVe JS')); //i LOvE js


/*3. Назовем счастливыми числами те, которые в результате ряда преобразований
вида "сумма квадратов цифр" превратятся в единицу.*/

const sumOfSquareDigits = (num) => {
	let res = 0;
	while (num > 0) {
		res += (num % 10) ** 2;
		num = Math.floor(num / 10);
	}
	return res;
}

const isHappyNumber  = (num) => {
	for (let i = 0; i < 10; i++) {
		let sum = sumOfSquareDigits(num);
		if (sum === 1) return true;
		else num = sumOfSquareDigits(sum);
	}
	return false;
}

//Тесты
console.log(isHappyNumber(7)); //True


//4. Числа Фибоначчи

const fib = (num) => {
	if (num === 0) return 0;
	else if (num === 1) return 1;
	else {
		return fib (num - 1) + fib (num - 2);
	}
}

//Тесты
console.log(fib(10)); //55


/*6. Создайте функцию isPerfect(), которая принимает число и возвращает true, если оно совершенное,
и false — в ином случае.
Совершенное число — положительное целое число, равное сумме его положительных делителей
(не считая само число). Делитель — это число, на которое делится исходное число.
Например, у числа 6 три делителя: 1, 2 и 3. Число 6 делится на любое из этих чисел.
Так же 6 — идеальное число, потому что 6 = 1 + 2 + 3.*/

const isPerfect = (num) => {
	let sum = 0;
	for (let i = 0; i < num; i++) {
		if (num % i === 0) sum += i;
	}
	return (num === sum) ? true : false;
}

//Тесты
console.log(isPerfect(6)); //True
console.log(isPerfect(7)); //False


/*7. Реализуйте и экспортируйте по умолчанию функцию, которая переворачивает цифры
в переданном числе и возвращает новое число. */

const revirement = (num) => {
	let res = "";
	if (num < 0) {
		res = "-";
		num = Math.abs (num);
	}

	let numstrrev = num.toString().split("").reverse().join(""); //преобразует в массив, разворчаивает и обратно в строку
	res = `${res}${numstrrev}`
	let resnum = Number(res);
	
	return resnum;
}

//Тесты
console.log(revirement(-8900)); //-98


/*8. Реализуйте и экспортируйте по умолчанию функцию, которая выводит (console.log)
в терминал числа в диапазоне от begin до end. При этом:

	.Если число делится без остатка на 3, то вместо него выводится слово Fizz
	.Если число делится без остатка на 5, то вместо него выводится слово Buzz
	.Если число делится без остатка и на 3, и на 5, то вместо числа выводится слово FizzBuzz
	. В остальных случаях выводится само число */

const fizzBuzz = (begin, end) => {
	for (let i = begin; i <= end; i++) {
		if ((i % 3 === 0) && (i % 5 === 0)) {
			console.log("FizzBuzz");
			continue;
		}
		else if (i % 3 === 0) {
			console.log("Fizz");
			continue;
		}
		else if (i % 5 === 0) {
			console.log("Buzz");
			continue;
		}
		else console.log(i);
	}
}

//Тест
fizzBuzz (11, 20); 
/*
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz*/



