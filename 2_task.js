/*1. Создайте функцию которая будет генерировать случайную строку например из 15 символов. у вас будет в функции использоваться вот такая строка
'0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
эта строка нужна для того что бы  из ее символов создавать новые строки, это просто как набор символов, и вы должны создавать новую строку а не переделывать эту.

2. На основании массива
 var users = [
 {
 name: 'Denis',
 age: 28,
 male: 'man'
 },
 {
 name: 'Ira',
 age: 50,
 male: 'wooman'
 },
 {
 name: 'Ivan',
 age: 32,
 male: 'man'
 },
 {
 name: 'Maksim',
 age: 46,
 male: 'man'
 },
 {
 name: 'Olga',
 age: 28,
 male: 'wooman'
 },
 {
 name: 'Oksana',
 age: 53,
 male: 'wooman'
 },
 {
 name: 'Dmitry',
 age: 28,
 male: 'man'
 },
 {
 name: 'Ludmila',
 age: 19,
 male: 'wooman'
 },
 {
 name: 'Larisa',
 age: 28,
 male: 'wooman'
 },
 {
 name: 'Natalia',
 age: 49,
 male: 'wooman'
 },
 {
 name: 'Valera',
 age: 63,
 male: 'man'
 },
 {
 name: 'Andrey',
 age: 33,
 male: 'man'
 },
 {
 name: 'Svetlana',
 age: 26,
 male: 'wooman'
 },
 {
 name: 'Raisa',
 age: 47,
 male: 'wooman'
 },
 {
 name: 'Oksana',
 age: 21,
 male: 'wooman'
 },
 {
 name: 'Elena',
 age: 38,
 male: 'wooman'
 },
 {
 name: 'Pavel',
 age: 32,
 male: 'man'
 },
 {
 name: 'Evgeny',
 age: 33,
 male: 'man'
 },
 {
 name: 'Stas',
 age: 28,
 male: 'man'
 },
 {
 name: 'Katya',
 age: 27,
 male: 'wooman'
 },
 {
 name: 'Valentina',
 age: 24,
 male: 'wooman'
 },
 {
 name: 'Olga',
 age: 17,
 male: 'wooman'
 },
 {
 name: 'Nikolay',
 age: 57,
 male: 'man'
 },
 {
 name: 'Vitaliy',
 age: 28,
 male: 'man'
 },
 {
 name: 'Konstantin',
 age: 30,
 male: 'man'
 }
 ];
, вам нужно создать новый объект состоящий из тех объектов что были в массиве, ключами в этом объекте будут имена + цифра так как имена могут повторяться и ключи в новом объекте должны быть с маленькой буквы пример как на выходе должен выглядеть получившийся объект:
	'denis_1': {
	name: 'Denis',
		age: 28,
		male: 'man',
},
'andrey_2': {
	name: 'Andrey',
		age: 32,
		male: 'man',
},
Создавать объект нужно внутри функции. т.е создать функцию, она принимает массив объектов и вы создаете новый объект состоящий из объектов.*/



//-1------------------------------ Случайная строка из СТРОКИ

randomString = function(n = 15){
	let newString = '',
			string ='0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM',
			length = string.length;
	while(newString.length < n)
		newString += string[Math.random() * length | 0];
	return newString;
};
randomString();



//-2----------

var users = [
	{
		name: 'Denis',
		age: 28,
		male: 'man'
	},
	{
		name: 'Ira',
		age: 50,
		male: 'wooman'
	},
	{
		name: 'Ivan',
		age: 32,
		male: 'man'
	},
	{
		name: 'Maksim',
		age: 46,
		male: 'man'
	},
	{
		name: 'Olga',
		age: 28,
		male: 'wooman'
	},
	{
		name: 'Oksana',
		age: 53,
		male: 'wooman'
	},
	{
		name: 'Dmitry',
		age: 28,
		male: 'man'
	},
	{
		name: 'Ludmila',
		age: 19,
		male: 'wooman'
	},
	{
		name: 'Larisa',
		age: 28,
		male: 'wooman'
	},
	{
		name: 'Natalia',
		age: 49,
		male: 'wooman'
	},
	{
		name: 'Valera',
		age: 63,
		male: 'man'
	},
	{
		name: 'Andrey',
		age: 33,
		male: 'man'
	},
	{
		name: 'Svetlana',
		age: 26,
		male: 'wooman'
	},
	{
		name: 'Raisa',
		age: 47,
		male: 'wooman'
	},
	{
		name: 'Oksana',
		age: 21,
		male: 'wooman'
	},
	{
		name: 'Elena',
		age: 38,
		male: 'wooman'
	},
	{
		name: 'Pavel',
		age: 32,
		male: 'man'
	},
	{
		name: 'Evgeny',
		age: 33,
		male: 'man'
	},
	{
		name: 'Stas',
		age: 28,
		male: 'man'
	},
	{
		name: 'Katya',
		age: 27,
		male: 'wooman'
	},
	{
		name: 'Valentina',
		age: 24,
		male: 'wooman'
	},
	{
		name: 'Olga',
		age: 17,
		male: 'wooman'
	},
	{
		name: 'Nikolay',
		age: 57,
		male: 'man'
	},
	{
		name: 'Vitaliy',
		age: 28,
		male: 'man'
	},
	{
		name: 'Konstantin',
		age: 30,
		male: 'man'
	}
];

