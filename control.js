// Задача. Вам дан массив объектов пользователей. Создайте функцию
// которая принимает этот объект выводит в консоль какое количество пользователей она приняла
// дальше функция должна нам создать два массива один состоящий из мужчин второй массив состоящий из женщин
// чей возраст попадает в промежуток от 30 - 50. также эти оба массива должны быть отсортированы по возрасту от меньшего к большему.
// массивы вывести в консоль. Всех кто не попадает под указанный промежуток возраста должны быть собраны также в отдельном массиве и отсортированны
// также вывести в консоль количество отдельно женщин и отдельно мужчин  попавших в возростной промежуток и не попавших в него.
// А сама функция должна вернуть через return  объект состоящий из 3-х ключей содержащие обработанные массивы. Примерно в таком виде
// return {
// 	'man_from_30_to_50': [],
// 	'wooman_from_30_to_50': [],
// 	'not_accept_from_30_to_50': [],
// }

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
var minAge = prompt('Минимальный возраст', 25);
var maxAge = prompt('Максимальный возраст', 45);

function usersSort(arr, minAge = 25, maxAge = 45) {
	const man = [];
	const wooman = [];
	const others = [];

	for(let i = 0, max = arr.length; i < max; i++) {
		if(arr[i]['age'] >= minAge && arr[i]['age'] <= maxAge) {
			arr[i]['male'] === 'man' ? man.push(arr[i]) : wooman.push(arr[i])
		} else {
			others.push(arr[i]);
		}
	}

	function sortArr(prev, next) {
		return prev['age'] - next['age']
	}

	man.sort(sortArr);
	wooman.sort(sortArr);
	others.sort(sortArr);

	// console.table(man);
	// console.table(wooman);
	// console.table(others);

	return {
	'man_from_30_to_50': man,
	'wooman_from_30_to_50': wooman,
	'not_accept_from_30_to_50': others
	}
}

var res = isNaN(minAge) || isNaN(maxAge) ?
			alert('вы ввели не число') : usersSort(users, minAge, maxAge);
console.log(res);