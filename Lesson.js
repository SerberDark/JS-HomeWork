//функция
// var i = 0;
// 	while	(++i < 10) {
// 		console.log(i);
//
// 	}

//счетчик вниз-----------------------------------------
// var i = 10;
// 	while	(--i) {
// 		console.log(i);
//
// }

//---While DO-----------------------------------------------
// var i;
// 	while	(i) {
// 		console.log(i);
// 	}
// 	do {
// 		console.log(i);
// 	}while (i);
	//----------------------------------------------------------


//  FOR-----------------------------------
// for (let i = 0; i < 10; i++) {
// 	console.log(i);
// }

// var arr = [1,2,55, 'string'];

// var arr = [
// 	{
// 		name: 'Serg',
// 		age: '28',
// 	},
// 	{
// 		name: 'Den',
// 		age: '29',
// 	},
// 	{
// 		name: 'Sem',
// 		age: '30',
// 	},
// 	{
// 		name: 'Nikolay',
// 		age: '31',
// 	},
// 	{
// 		name: 'Oleg',
// 		age: '33',
// 	}
// ];
//
// for (let i=0, max = arr.length; i < max; i++) {
// 	//console.log(arr[i]['name']);
// 	//добавляем новое поле в объект
// 	//arr[i]['mail'] = 'some@ru';
// 	//console.log(arr[i]);
//
// 	// if (arr[i]['age'] > 27 && arr[i]['age'] <= 30) {
// 	// 	console.log(arr[i]);
// 	// }
// 	//var str = 'Меня зовут ' + arr[i]['name'] + ' мне ' + arr[i]['age'];
// 	// ES 6
// 	//var str = `Меня зовут ${arr[i]['name']} мне ${arr[i]['age']}`
//
// 	//if(i == 2) continue;
// 	//console.log(arr[i]);
// }






//------------------------Работа с объектами------------------------

// var user = {
// 	name: 'Denis',
// 	age: '28',
// 	phone: '1234567',
// 	email: 'some@ru',
// 	more: {
// 		birthday: '01.03.89',
// 		city: 'Kharkiv'
// 	}
// };
//
// var userName,
// 		userAge,
// 		objMoreInfo;
//
// for (var key in user) {
// 	if(key == 'name') {
// 		userName = user[key];
// 	}
// 	if(key == 'age') {
// 		userAge = user[key];
// 	}
//
// 	//console.log(key, user[key]);
// 	if(key == 'more') {
// 		objMoreInfo = user[key];
// 		for (var key2 in user[key]) {
// 			console.log(key2, user[key][key2]);
// 		}
// 	}
// }
// console.log(userName, userAge, objMoreInfo);

//Object.keys(user)  Используется для того чтоб получить ключи в виде масива
//	["name", "age", "phone", "email", "more"]


// цикл перебора массива
// var arr = [1,2,3,4,5]
//
// for (var value of arr) {
// 	console.log(value);
// }
//
// //-------------------------------------------------------------------------
//
//
// var arr = [1,2,3,4,5];
//
// //arr.push() добавлять в конец масива новый элемент
// //arr.pop()	удаляет в конец масива новый элемент
// // arr.unshift() удаляет в начало масива новый элемент
// // arr.shift()  добавлять в начало масива новый элемент
//
// //arr.join() возвращает масив в виде строки
// //arr.join('')
// //"123456789sasas"
//
// //var str = 'some str js obj' // разбивает строку на масив с указанием разделителя
// // str.split(' ')
// // 	["some", "str", "js", "obj"]
//
// //arr.reverse() // реверс масива
//
// // Можно писать методы друг за другом
//
// // Конкотенация масивов
// //arr.concat([20,30]) склеивает масивы
//
// //arr.slice(2,4) передается скакого места и до какого
//
// //
// // arr
// // 	[1, 2, 3, 4, 5, 6, 7, 8, 9, "sasas"]
// // arr.splice(2,2)  удаляет указанные позиции
// // 	[3, 4]
// // arr
// // 	[1, 2, 5, 6, 7, 8, 9, "sasas"]
//
// // удаляет с указаной позиции и добавляет указанные позиции в масив
// // arr = [1,2,3,4,5,6,7,8,9]
// // 	[1, 2, 3, 4, 5, 6, 7, 8, 9]
// // arr.splice(2,2, '232232323232')
// // 	[3, 4]
// // arr
// // 	[1, 2, "232232323232", 5, 6, 7, 8, 9]
// // arr.splice(2,2, '232232323232', '4545')
// // 	["232232323232", 5]
//
// var user = [1,2,3,4];
// var user = {
// 	name: 'Denis',
// 	age: '28',
// 	phone: '1234567',
// 	email: 'some@ru',
// 	more: {
// 		birthday: '01.03.89',
// 		city: 'Kharkiv'
// 	}
// };
// for (var key in user) {
// 	arr.push(user[key])
// }
// console.log(arr)
//
//
//
//
//
//
// /*-------------------------------------------------------НОВАЯ ТЕМА---------------------------------------------------------------------------------*/
//
// // Присвоение переменной
//
// var x = 1,
// 		y = 2;
//
// var obj = {
// 		x,
// 		y
// }
// //  Диструктурированный метод записи
//
// var arr = ['ssd', 1, 4];
//
// //1 вариант
// 	var one = arr[0],
// 			two = arr[1],
// 			three = arr[2];
// //2 вариант
// 	var [one, two, three] = arr;
// 	console.log(one, two, three);
//
//
// // с обьектом
//
// var arr = ['ssd', 1, 4];
// var user = {
// 	name: 'Denis',
// 	age: '28'
// };
//
// var [one, two, three] = arr;
// var {name, age} = user;
// console.log(name, age);



// Функции

// var a = 2,
// 		b = a + 2;
// console.log(`Result ${b}`);

//обьявление функции
// Фанктион декларешин  всплывает вверх
// function foo() {
// 	var a = 2,
// 		b = a + 2;
// 	console.log(`Result ${b}`);
// }
//
// //обьявление функции
// // Фанктион експрешин  не всплывает вверх
// var foo2 = function () {
// 	//тело функции
// };
//
// // к переменной можно присвоить функцию
// function foo() {
// 	var a = 2,
// 		b = a + 2;
// 	console.log(`Result ${b}`);
// 	return b; // функция всегда что-то возвращает
// }
// var res = foo() + 10;  // присвоение
// console.log(res);



// Самовызывающиеся анонимные функции НЕ ИМЕЕТ ИМЕНИИ И ВЫЗЫВАЕТСЯ СРАЗУ
// оболочка ДЛЯ ВСЕГО
// ;(function () {
// 		var a = 2,
// 			b = a + 2;
// 		console.log(`Result ${b}`);
// })();



//  ОБЛАСТЬ ВИДИМОСТИ
// var a = 'some str';
//
// function foo() {
// 	 var a = 2,    //переменные внутри функции явл. локальными и не доступны извне!  Обязательно использовать ключевое слово VAR
// 		b = a + 2;
// 	console.log(`Result ${b}`);
// 	return b; // функция всегда что-то возвращает
// }
// var res = foo() + 10;  // присвоение
// console.log(res);
//
// console.log(a);



// Аргументы


//... rest
// var a = 'some str';
//
// //...args хранилище аргументов можно обрабатывать как массив
//
// function foo(...args) { // пишутся внутри скобок
// 	// var a = 2,    //переменные внутри функции явл. локальными и не доступны извне!  Обязательно использовать ключевое слово VAR
// 		b = a + 2;
// 	console.log(args);
// 	return b; // функция всегда что-то возвращает
// }
// var res = foo(5, 3, 10) + 10;  // присвоение
// // console.log(res);


// Метод сорт-------------------------------------------------------------------------------------------------------------------------------------------

// var arr = [1,2,15,8,10,3,2];


// Сортировка массива
// var arr = [
// 	{
// 		name: 'Denis',
// 		age: '28'
// 	},
// 	{
// 		name: 'Kolj',
// 		age: '30'
// 	},
// 	{
// 		name: 'Serg',
// 		age: '25'
// 	},
// 	{
// 		name: 'Max',
// 		age: '17'
// 	}
// ]
//
// function sortArr(prev, next) {
// 	console.log(`1: ${prev}, 2: ${next}`);
// 	 return prev['age'] - next['age'];
//
// 	 //if(prev['name'] < next['name']) return -1;   // сортировка по имени
// 	 //if(prev['name'] > next['name']) return 1;   //сортировка по имени
//
// }
// var newArr = arr.sort(sortArr);
// 	console.log(newArr);







////////////////////////  Функции высшего порядка /////////////////////////////// возвращает функцию или же принимает другую функцию в качестве аргумента

//1
// function firstFunc() {
// 	return function  secondFunc() {
// 		console.log(`Hello ${name}`);
// 	}
//
// }

//2 Хендлер
//
// function getNumber(number, handler) {
// 	return handler(number);
// }
//
// function handler(num) {
// 	return `You set number is: ${num}`;
// }
//
// var res = getNumber(10, handler);
// console.log(res);

//3 Функция обработчик
// var name = '';
//
// function processString(str, func) {
// 	var newStr = '';
// 	var str = str || 'standart str';
// 	for (var i = 0; i < str.length; i++){
// 		newStr += func(str[i]) + ' ';
// 	}
//
// 	return newStr;
// }
//
// function handler(sumbol) {
// 		return sumbol.toUpperCase();
// }
// var res = processString(name, handler);
//
// console.log(res);




//---------------------------------Р Е К У Р С И Я------------------------------------------------

// function foo(limit) {
// 	var value;
//
// 	if(limit > 0) {
// 		value = limit + foo(limit-1);
// 	}else	{
// 		value = limit;
// 	}
// 	return value;
// }



//----------------------------------------------ФИЛЬТР-----------------------------------

// var arr = [1,1,3,54,323,1,2,7,9,4,3];
//
// function sortUnicVal(curentValue, index, arr) {
// 	if (index == arr.indexOf(curentValue) ) return curentValue;
//
// }
//
// var newArr = arr.filter(sortUnicVal);







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////
// Передача переменных //
function foo(x = 11, y, z) {
	x = x !== undefined ? x : 11;
	return x + y + z;
}

var res = foo(1, 2, 3);

console.log(res);




////////////////////////////////////// THIS ////////////////////////
// МЕТОДЫ

var obj = {
	  name: 'Denis',
	  age: 28,
	  getAge: function () {
				return obj.age;
	 },
	changeAge: function (age) {
			obj.age = age;
	}
};
console.log(obj.getAge());

////  через this   /////////////////

function getAge() {
	return this.age;
}
function changeAge(age) {
	this.age = age;
	return this;
}

var obj = {
		name: 'Denis',
		age: 28,
		getAge: getAge,
		changeAge: changeAge
};

var user2 = {
		name: 'Ivan',
		age: 30,
		getAge: getAge,
		changeAge: changeAge
	};
user2.getAge = obj.getAge();





///////////////////////Принудительный контекст вызова CALL

var name = prompt('Введите название', 'intel celeron x2 4576/113');
var discount = prompt('Введите скидку', '0');

var item = {
		itemName: 'intel celeron x2 4576/113',
		price: '2000грн'
};

function getName() {
	return this.itemName;
}

function changeName(name) {
	this.itemName = name;
	return this;
}

function getPriceWithDiscount(discount) {
	return parseFloat(this.price) * (100 - discount) / 100;
}

var resName = getName.call(item);
var resChangeName = changeName.call(item, name);
var resGetPriceWithDiscount = getPriceWithDiscount.call(item, discount);

console.log(item, resGetPriceWithDiscount);



///////////////////////Принудительный контекст вызова APPLY

// var name = prompt('Введите название', 'intel celeron x2 4576/113');
// var discount = prompt('Введите скидку', '0');

var item = {
	itemName: 'intel celeron x2 4576/113',
	price: '2000грн'
};

function getName() {
	return this.itemName;
}

function changeName(name) {
	this.itemName = name;
	return this;
}

function getPriceWithDiscount(discount, currency) {
	return currency + (parseFloat(this.price) * (100 - discount) / 100);
}

var resName = getName.apply(item);
//var resChangeName = changeName.apply(item, name);
var resGetPriceWithDiscount = getPriceWithDiscount.apply(item, [10, '$']);

console.log(item, resGetPriceWithDiscount);


/////////////////////////////////////////
function foo(x, y, z) {
	return x + y + z;
}

var res = foo.apply(null, [1, 2, 3]);

console.log(res);
/////////////////////////////////////////

Math.max.apply(null, [2,4,5]);

/////////////////////////////////////////

function foo(x, y, z) {
	var list = [].slice.call(arguments);
		console.log(list)
}

	var res = foo(1, 2, 3);

/////////////////////////////////////////// Сохранить this через Self

var res = foo(1,2,3);

function Some() {
	var self = this;
	this.someVar = 'fsdsds';

	$(el).on('click', function () {
		self.someVar
	})
}

/////////////////////////////////////////////// Bind  Обработка сложных данных Закрепление вязи с объектом

var user = {
	uName: 'Denis',
	getName: function () {
		return this.uName;
	}
};

var getName = user.getName.bind(user);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



















