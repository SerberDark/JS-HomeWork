//------------------------------------home-work-Lecture4---------------------------------

//-----------task1---------
//----1----
a = a + 10, b = b * 18, c = c - 10;
//a += 10, b *= 18, c-= 10
x = a + x, y = y * z, i = i * 5 * y;
// x += a, y *= z, i *= 5 * y;


//-----2-----
x= 16;
//16
x *= x;
//256


//-----3-----
if (a == 'hidden'){
	a = 'visible';
}else {
	a = 'hidden';
}
//"visible"
if (a == 'hidden'){
	a = 'visible';
}else {
	a = 'hidden';
}
//"hidden"

// тернарная запись
a == 'hidden' ? a = 'visible' : a == 'visible' ? a = 'hidden' : a == 'visible';
//"hidden"
a == 'hidden' ? a = 'visible' : a == 'visible' ? a = 'hidden' : a == 'visible';
//"visible"


// --------------------if--else--start------------------------------------------------
var a = 0;
if (a == 0){
	a = 1;
}else if (a < 0) {
	a = 'less then zero'
}else if (a > 0) {
	a *= 10;
}
//1
var a = -10;
if (a == 0){
	a = 1;
}else if (a < 0) {
	a = 'less then zero'
}else if (a > 0) {
	a *= 10;
}
//"less then zero"
var a = 100;
if (a == 0){
	a = 1;
}else if (a < 0) {
	a = 'less then zero'
}else if (a > 0) {
	a *= 10;
}
//1000
//--------------------------if--else--end-----------------------------------------------------

//-----------------запись тернарным оператором ---начало--------------------------------------
var a = 0;
a == 0 ? a = 1 : a < 0
		? a = 'less then zero' : a > 0
			? a *= 10 : a *= 10
//1

var a = 5;
a == 0 ? a = 1 : a < 0
		? a = 'less then zero' : a > 0
			? a *= 10 : a *= 10
//50

var a = -5;
a == 0 ? a = 1 : a < 0
		? a = 'less then zero' : a > 0
			? a *= 10 : a *= 10
//"less then zero"
//-----------------запись тернарным оператором ---конец-------------------------------

//-------------------------Switch--Case--Start----------------------------------------
var a = 'none';
switch(a) {
	case ('block') : console.log('block'); break;
	case ('none') : console.log('none'); break;
	case ('inline') : console.log('inline'); break;
	default: console.log('other');
}
//VM228:4 none
//-------------------------Switch--Case--End----------------------------------------

//1--
12 + 14 + '12';
//"2612"

//2--
3+2-'1';
//4

//3--
'3'+2-1;
//31

//4--
true + 2;
//3

//5--
+'10'+1;
//11

//6--
undefined + 2;
//NaN

//7--
null + 5;
//5

//8--
true + undefined;
//NaN

//9--
var a = 0 || 'string';
console.log(a);
//VM2233:2 string  Или запинается на правде

//10--
var a = 1 && 'string';
console.log(a);
//VM2266:2 string И запинается на лжи если лжи нет возвращает первую правду с права на лево

//11--
var a = null || 25;
console.log(a);
//VM2533:2 25  Запинается на правде

//12--
var a = null && 25;
console.log(a);
//null Запинается на лжи

//13--
var a = null || 0 || 35
console.log(a);
//VM2608:2 35 Запинается на правде

//14--
var a = null && 0 && 35;
console.log(a);
//VM2639:2 null Запинается на лжи


