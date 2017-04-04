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

user.getName = getUserName;

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
	double: double,
	plusOne: plusOne,
	minusOne: minusOne
};

function double() {
	this.value += this.value;
	return this
}

function plusOne() {
	this.value++;
	return this
}

function minusOne() {
	this.value--;
	return this
}

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



// slide 36

//-1-----

function getList() {
	return this.list
}
var users = {
	length: 4,
	list: ['Abraham', 'James', 'John', 'Serhii']
};

getList(); // Функция вызывается глобально для нее this is window (Потеря контекста)
// undefined

users.getList = getList;  // Одалживаем объекту метод getList
//function getList() {
//	return this.list
//}

users.getList(); // Теперь есть возможность использовать полученный метод getList
//["Abraham", "James", "John", "Serhii"]

getList.call(users);  // Подменяем контекст вызова функции методом call(нужный нам контекст)
// ["Abraham", "James", "John", "Serhii"]


//-2-----Метод общей стоимости

var obj = {
	retailPrice: '100$',
	quantityDetails: 1000,
	totalCost: totalCost
};

function totalCost() {
		return parseFloat(this.retailPrice) * this.quantityDetails
}

obj.totalCost();
//10000


//-3------Метод изменения контекста через call

var obj = {
	retailPrice: '100$',
	quantityDetails: 1000,
	totalCosts: totalCosts
},
	otherObj = {
		quantityDetails: 50,
		retailPrice: '5$',
	};

function totalCosts() {
	return parseFloat(this.retailPrice) * this.quantityDetails
}

totalCosts.call(otherObj);
// 250


//-4------Использование метода не изменяя объект

var size = {
	width: 5,
	height: 10
};
	getSquare = function () {
		return this.width * this.height
	};

getSquare.call(size); // получение результата через call
// 50

getSquare = getSquare.bind(size); // связываем метод и объект

getSquare(); // через Bind
//50


//-5-----Использование Apply

var numbers = [
	4, 12, 0, 10, -2, 4
];

Math.min.apply(null, numbers);
//-2


//-6----------Заимствование метода другим объектом через call

var elements = {
	height: '15px',
	marginTop: '5px',
	marginBottom: '5px',
	getFullHeight: function () {
		return parseFloat(this.height) + parseFloat(this.marginTop) + parseFloat(this.marginBottom)
	}
};
	block = {
		height: '5px',
		marginTop: '3px',
		marginBottom: '3px'
	};

elements.getFullHeight.call(block);
// 11


//-7----------Связываем контекст вызова с функцией при помощи метода Bind

var element = {
	height: 25,
	getHeight: function () {
		return this.height
	}
};

var getElementHeight = element.getHeight.bind(element); //

getElementHeight();
// 25













