//-----------------------------------Lecture 5--------------------------------------------------------
//-----------слайд 7

//задача---1------------------------------------

var str = 'i am in the easycode',
		resultStr = '';

for (let i = 0; i < str.length; i++) {
	let letterCurrent = str[i];
	if (i === 0 || str[i - 1] === ' ') {
		resultStr += letterCurrent.toUpperCase();
	} else {
		resultStr += letterCurrent;
	}
}
//"I Am In The Easycode"

//задача---2-------------------------------------

var str = 'tseb eht ma i',
		result = '';

for (let i = 0; i = str.length; i--) {
		result += str[i];
}
//"i am the best"

//задача---3-------------------------------------

let n = 10;
	function factorial(n) {
		return n ? n * factorial(--n) : 1;
	}
		console.log(factorial(n));

//3628800

//задача---4-----------------------------------Перезапись строки

var str = 'Считаем до 10и: ';

for (let i = 1; i <= 10; i++) {
	str += i + ', ';
	str.substring(0, str.length -2);
}
//"Считаем до 10и: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10"

//задача---5-------------------------------------

var str = 'JavaScript is a pretty good language',
		result = str[0].toLocaleUpperCase(),
		length = str.length;

for (let i = 1; i < length; i++) {
	if (str[i] === ' ') {
		result += str[i + 1].toUpperCase();
		i++;
	} else {
		result += str[i];
	}
}

//JavaScriptIsAPrettyGoodLanguage

//задача---6-------------------------------------Нечетные вывести

for (let i = 0; i <= 15; i++) {
	if (i % 2 === 0) {
		continue;
	}
	console.log(i);
}
//1
//3
//5
//7
//9
//11
//13
//15