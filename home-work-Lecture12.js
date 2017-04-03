//-----------------------------------Lecture 12--------------------------------------------------------
// slide 16


//-1---Метод получения площади треугольника

var rectangle = {
		width: 2,
		height: 2,
		getSquare: getSquare
};

function getSquare() {
	return this.width * this.height;
}


//-2---Метод получение цены и Метод получения цены с учетом скидки

var price = {
	price: 10,
	discount: '15%',
	getPrice: getPrice,
	getPriceWithDiscount: getPriceWithDiscount
};

function getPrice() {
	return this.price;
}

function getPriceWithDiscount() {
	return (parseFloat(this.discount) * (this.price) / 100 - this.price) * -1;
}

price.getPrice();
// 10
price.getPriceWithDiscount();
// 8.5


//-3---Метод возвращает name

var user = {
	name: 'Serhii',
	getUserName: getUserName
};

function getUserName() {
	return this.name;
}
user.getUserName();
//'Serhii'

user.getName = function () {
	return this.name
};

user.getName();
//"Serhii"


//-4---Метод увеличения высоты на единицу

var figure = {
	height: 1,
	getHeightAdd: getHeightAdd
};

function getHeightAdd() {
	this.height++;
	return this.height
}

figure.getHeightAdd();
// 2
figure.height;
// 2


//-5---Методы изменения значения цепочкой (chaining)

var numerator = {
	value: 1,
	double: function double() {
		this.value += this.value;
		return this
	},
	plusOne: function plusOne() {
		this.value++;
		return this
	},
	minusOne: function minusOne() {
		this.value--;
		return this
	}
};

numerator.double().plusOne().plusOne().minusOne();

numerator.value;
// 3


//-6---Взаимствование метода

var user = {
		name: 'Serhii'
	},
	otherUser = {
		name: 'John',
		getName: function () {
			return this.name;
		}
	};

user.getName
// undefined т.к. у Usera нет метода getName

user.getName = otherUser.getName; // Взаимствует метод у otherUser
user.getName(); // 'Serhii' теперь можно получить имя используя взаимствованный метод

otherUser.getName();
// 'John' Метод вызывает ключ name в обьекте otherUser

