const container = document.querySelector(".container")
const divBox = document.createElement('div');
divBox.classList.add('box');
container.append(divBox);

for (let i = 0; i < 10; i++) {
	const divBoxItem = document.createElement('div');
	divBoxItem.classList.add('box-item');

	const divItemTop = document.createElement('div');
	divItemTop.classList.add('item-top');

	const imgBag = document.createElement('img');
	imgBag.src = 'img/bag.png';

	const divItemBottom = document.createElement('div');
	divItemBottom.classList.add('item-bottom');

	const h2SupTitle = document.createElement('h2');
	h2SupTitle.classList.add('sup-title');
	h2SupTitle.textContent = 'Mens clothing (120)';

	const description = document.createElement('p');
	description.classList.add('description');
	description.textContent = 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday';

	const divSubTitle = document.createElement('div');
	divSubTitle.classList.add('sub-title');

	const divTitlePrice = document.createElement('div');
	divTitlePrice.classList.add('title-price','title-item');

	const imgPrice = document.createElement('img');
	imgPrice.src = 'img/price.svg';

	const spanPrice = document.createElement('span');
	spanPrice.textContent = '109';

	const divTitleRating = document.createElement('div');
	divTitleRating.classList.add('title-rating','title-item');

	const imgRating = document.createElement('img');
	imgRating.src = 'img/rating.svg';

	const spanRating = document.createElement('span');
	spanRating.textContent = '3,9';

	const divTitleCount = document.createElement('div');
	divTitleCount.classList.add('title-count','title-item');

	const imgCount = document.createElement('img');
	imgCount.src = 'img/count.svg';

	const spanCount = document.createElement('span');
	spanCount.textContent = '120';

	const buttonFavorite = document.createElement('button');
	buttonFavorite.textContent = 'В избранное';

	divBox.append(divBoxItem);
	divBoxItem.append(divItemTop);
	divItemTop.append(imgBag);
	divBoxItem.append(divItemBottom);
	divItemBottom.append(h2SupTitle);
	divItemBottom.append(description);
	divItemBottom.append(divSubTitle);
	divSubTitle.append(divTitlePrice);
	divTitlePrice.append(imgPrice);
	divTitlePrice.append(spanPrice);
	divSubTitle.append(divTitleRating);
	divTitleRating.append(imgRating);
	divTitleRating.append(spanRating);
	divSubTitle.append(divTitleCount);
	divTitleCount.append(imgCount);
	divTitleCount.append(spanCount);
	divItemBottom.append(buttonFavorite);
}







































//Задача: Создание объекта
//Создай объект person, который представляет собой человека со свойствами name и age. Затем добавь метод introduce, который будет выводить строку вида "Меня зовут [name] и мне [age] лет.".



//Задача: Наследование
//Создай базовый класс Vehicle с свойством color и методом start, который будет выводить сообщение "Автомобиль [color] цвета начал движение.". Затем создай производный класс Car, который наследует Vehicle и добавь ему метод honk, который будет выводить сообщение "Автомобиль [color] цвета сигналит.".

//class Vehicle {
//	constructor(color) {
//		this.color = color
//	}
//	start() {
//		return `Автомобиль ${this.color} цвета начал движение`
//	}
//}
//let car = new Vehicle("черного")
//console.log(car.start());

//class Car extends Vehicle {
//	honk() {
//		return `Автомобиль ${this.color} цвета сигналит`
//	}
//}

//let car2 = new Car("белого")

//console.log(car2.honk());


////Задача: Расчет площади
////Создай класс Rectangle с конструктором, принимающим ширину и высоту прямоугольника. Добавь метод getArea, который будет возвращать площадь прямоугольника (ширина * высота).

//class Rectangle {
//	constructor(width, height) {
//		this.width = width
//		this.height = height
//	}

//	getArea() {
//		return (this.width * this.height)
//	}
//}

//let area = new Rectangle(200, 100)

//console.log(area.getArea());



////Задача: Учет товаров
////Создай класс Product, который представляет товар со свойствами name и price. Затем создай класс Cart, который будет иметь свойство items (массив товаров) и методы addItem (добавление товара) и getTotal (получение общей стоимости товаров в корзине).


//class Product {
//	constructor(name, price) {
//		this.name = name;
//		this.price = price;
//	}
//}

//let prod1 = new Product("Banan", 25)
//let prod2 = new Product("Cucumber", 10)
//let prod3 = new Product("Cherry", 15)
//let prod4 = new Product("Tomato", 5)

//class Cart {
//	constructor() {
//		this.items = []
//	}
//	addItem(product) {
//		this.items.push(product);
//	}
//	getTotal() {
//		let total = 0;
//		for (let i = 0; i < this.items.length; i++) {
//			total += this.items[i].price;
//		}
//		return total;
//	}
//}
//let cart = new Cart()
//cart.addItem(prod1)
//cart.addItem(prod2)
//cart.addItem(prod3)
//cart.addItem(prod4)

//console.log(cart.getTotal());



//let body = document.body
//let container = document.createElement("div")
//let box = document.createElement("div")
//let box_item = document.createElement("div")
//let h2 = document.createElement("h2")
//let btn = document.createElement("button")


//container.classList.add("container")
//box.classList.add("box")
//box_item.classList.add("box-item")

//h2.innerHTML = "Lorem Ipsum"
//box_item.append(h2)
//body.append(container)
//container.append(box)
//box.append(box_item)


//for (let i = 0; i < 3; i++) {
//	let p = document.createElement("p")
//	box_item.append(p)
//	p.innerHTML = "Lorem IPS dadasfa asf"
//}
//btn.innerHTML = "podrobnye"
//box_item.append(btn)




//let table = document.createElement("table")
//let tr = document.createElement("tr")
//let th = document.createElement("th")

//body.append(table)


//for (let i = 0; i < 5; i++) {
//	table.append(tr)

//}
//for (let i = 0; i < 5; i++) {
//	let td = document.createElement("td")
//	td.innerHTML = "Somthing"
//	tr.append(td)
//}







































//let form = document.forms.login
//let inputs = document.querySelectorAll('input')

//let patterns = {
//	name: /^[a-z а-ё]+$/i,
//	password: /^(?=.*[-\#\$\.\%\&\@\!\+\=\<\>\*])(?=.*[a-zA-Z])(?=.*\d).{8,12}$/,
//	phone: /^9989[012345789][0-9]{7}$/,
//	email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
//}


//let bool = true
//function validation(regex, field) {
//	if (regex.test(field.value)) {
//		field.style.border = "2px solid blue"
//		bool = false
//	} else {
//		field.style.border = "2px solid red"
//		bool = true
//	}
//}

//inputs.forEach(inp => {
//	inp.onkeyup = () => {
//		if (inp.name === "age") {
//			if (inp.value >= 16 && inp.value <= 160) {
//				inp.style.border = "2px solid blue"
//				bool = false
//			} else {
//				inp.style.border = "2px solid red"
//				bool = true
//			}
//		} else {
//			validation(patterns[inp.name], inp)
//		}
//	}
//})

//form.onsubmit = (e) => {
//	e.preventDefault();
//	if (bool) {
//		console.log("error");
//	} else {
//		submit(e)
//	}
//}


//function submit(e) {
//	let user = {}

//	let fm = new FormData(e.target)

//	fm.forEach((value, key) => {
//		user[key] = value
//	})

//	console.log(user);
//}











//window.addEventListener('load', function () {
//	var button = document.getElementById('changeColorButton');

//	button.addEventListener('click', function () {
//		var body = document.querySelector('body');
//		body.style.backgroundColor = getRandomColor();
//		console.log(getRandomColor());
//	});
//});

//function getRandomColor() {
//	var letters = '0123456789ABCDEF';
//	var color = '#';
//	for (var i = 0; i < 6; i++) {
//		color += letters[Math.floor(Math.random() * 16)];
//	}
//	return color;
//}

