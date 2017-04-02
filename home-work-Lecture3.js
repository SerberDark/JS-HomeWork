//-----------------------Lecture-3------------HOME-WORK-------------------------------

//task 1
let price = 50;
const maxNumber = 100;
const nameUser = Piter;
let infoUser = {age: '16', name: 'Piter', street: 'Sumska'};


//task 2
console.log(test);
var test = 'string';
//undefined

var x = 'string';
var x = 'string #2';
console.log(x);
//string #2


//task 3
console.log(test);
let test = 'string';
// test is not defined

const x = 'string';
x = 'string #2';
console.log(x);
//Assignment to constant variable Константу нельзя переопределить и как либо изменить.


let someVariable = 15;
let someVariable = 10;
//Uncaught SyntaxError: Identifier 'someVariable' has already been declared //let нельзя переопределить но значение новое присвоить возможно.


//task 4
//----1----
var string = 'some test string';
string.length;
//16
string2 = string.substring(1, [-1]) + string.substring(15)
//"sg"

//----2----
let string = 'some test string';
string.length;
//16
string2 = string.substring(1, [-1])
//"s"
string2.toUpperCase();
//"S"
string2 = string2.toUpperCase() + string.substring(1);
//"Some test string"
string3 = string.substring(15);
//"g"
string = string2.substring(0, [15]) + string3.toUpperCase();
console.log(string);
//"Some test strinG"


//------------------------------------------------------------------------------------------------
let string = 'some test string';
string = string[0].toUpperCase() + string.slice(1,string.length-1) + string[string.length-1].toUpperCase()
//"Some test strinG"








//----3----
var string = 'some test string';
string.indexOf('string')
//10

//----------------------ПОСИСК В СТРОКЕ
//----4----
var string = 'some test string';
string.indexOf(' ')
//4
let str = 'some test string',
 firstSpace = str.indexOf(' '),
 secondSpace = str.indexOf(' ', firstSpace+1);
str.indexOf(' ', secondSpace);
//11



//----5----
var string = 'some test string';
string.substr(5, 4);
//"test"


//----6----
var string = 'some test string';
string.substring(5, 10);
//"test "


//----7----
var string = 'some test string';
string.length;
//16
string2 = string.slice(0, [10]);
//"some test "


//----8----
var a = 20, b = 16;
string = (a + '') + (b + '');

string = '' + a + b;
//"2016"



//task 5
//----1----
Math.round(Math.PI * 100) / 100;
//3.14



//----2----
Math.max(15, 11, 16, 12, 51, 12, 13, 51);
//51
Math.min(15, 11, 16, 12, 51, 12, 13, 51);
//11


//----3----
Math.round(Math.random() * 100) / 100;
//0.61

//----4----
Math.round(Math.random() * 100);
//77


//----5----
Math.ceil((0.6 + 0.7)*10)/10;
//1.3
Math.round((0.6 + 0.7)*10)/10;
//1.3


//----6----
parseInt('100$');
//100



//task 6
//----1----
var obj = {product: 'iphone'};
console.log(obj);
//Object {product: "iphone"}


//----2----
obj[price] = '1000';
//Object {product: "iphone", price: "1000"}

//----3----
obj[details] = {model: '7', color: 'green'};
//Objectdetails: Objectcolor: "green"model: "7"__proto__: Objectprice: "1000"product: "iphone"__proto__: Object

//-----------------------Lecture-3------------HOME-WORK-------------------------------