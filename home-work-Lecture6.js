//-----------------------------------Lecture 6--------------------------------------------------------
//-----------слайд 35

//задача---1------------------------------------
function multiply() {
	if (arguments.length === 0) return 0;
	var res = 1;
	for (i = 0, max = arguments.length; i < max; i++) {
		res *= arguments[i];
	}
}
multiply(2,3,4,5,6,7,8);





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















