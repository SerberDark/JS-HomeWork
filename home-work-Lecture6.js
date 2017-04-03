//-----------------------------------Lecture 6--------------------------------------------------------


//задача---1-------------------------------возвращает произведение чисел
function multiply() {
	if (arguments.length === 0) return 0;
	var res = 1;
	for (i = 0, max = arguments.length; i < max; i++) {
		res *= arguments[i];
	}
	return res
}
multiply(1, 2, 3);
//6

//задача---2-----------------------Факториал числа
function factorial(limit) {
	var n;
	if (limit > 1) {
		n = limit * factorial(--limit);
	} else {
		n = limit;
	}
	return n
}
factorial(10);
//3628800----------


//задача---3-----------------------Функция возвращает развернутую строку
function reverseStr() {
	if (arguments.length === 0) return 'no string';
	var resultStr = '';
	for (i = 0, max = arguments.length; i < max; i++) {
		resultStr  += arguments[i];
	}
	return resultStr.split("").reverse().join("");
}
reverseStr('test');
//"tset"
reverseStr('test 2');
//"2 tset"


//задача---4---------------------------??????????? запинается на первом символе ????

function unicodeStr() {
	if (arguments.length === 0) return 'no string';
	var resultStr = '';
	for (i = 0, max = arguments.length; i < max; i++) {
		resultStr  += arguments[i].charCodeAt(0) + ' ' + arguments[i].charCodeAt(1) + ' ' + arguments[i].charCodeAt(2) + ' ' + arguments[i].charCodeAt(3) + ' ' + arguments[i].charCodeAt(4)
	}
	return resultStr;
}
unicodeStr('hello');
//"104 101 108 108 111"


//задача---5------------------------------------

function printChars(str) {

	if (str) {
		console.log(str[0]);
		printChars(str.substr(1));
	}
}
printChars('test');
//t
//e
//s
//t


//задача---6------------------------------------

function firstFunc(list, handler) {
	var result = 'New value: ';

	for (let i = 0; i < list.length; i++) {
		result += handler(list[i]);
	}
	return result;
}
//-1 - удаление пробелов и увеличение первыхсимволов
firstFunc(['my', 'name', 'is', 'Trinity'], function (value) {
	return value[0].toUpperCase() + value.substr(1);
});
//"New value: MyNameIsTrinity"

//-2 * умножение на 10
firstFunc([10, 20, 30], function (value) {
	return value * 10 + ', ';
});
//"New value: 100, 200, 300, "

//-3
firstFunc([{age: 45, name: 'Jon'}, {age: 20, name: 'Aaron'}], function (value) {
	return value.name + ' is ' + value.age + ', ';
});
//"New value: Jon is 45, Aaron is 20, "

//-4 поворот
firstFunc(['abc', '123'], function (value) {
	return value.split("").reverse().join("") + ', ';
});
//"New value: cba, 321, "

//-5 прибавление 5
firstFunc([1, 2, 3], function (value) {
	return value + 5 + ', ';
});
//"New value: 6, 7, 8, "