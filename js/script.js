const container = document.querySelector(".container")
const show_all = document.querySelector(".buttons .show-all")
const show_five = document.querySelector(".buttons .show-five")
const cart_amount = document.querySelector('#cart-amount')
const cart_btn = document.querySelector('.cart-btn')
const cart_side = document.querySelector('.cart-side')
const close_cart = document.querySelector('.close-cart')
const selectAll = document.querySelector('.select-all input')
const cart_box = document.querySelector(".scroll")
const cart_hide = document.querySelector(".cart-box")
const del_all = document.querySelector(".dell-all")
const total_price = document.querySelector('.total-price')
const divBox = document.querySelector('.box')
let cart = []


show_five.onclick = () => {
	reload(arr.slice(0, 5))
}
show_all.onclick = () => {
	reload(arr)
}

reload(arr)

function reload(data) {
	divBox.innerHTML = ""

	for (const product of data) {
		const divBoxItem = document.createElement('div');
		const divItemTop = document.createElement('div');
		const imgBag = document.createElement('img');
		const divItemBottom = document.createElement('div');
		const h2SupTitle = document.createElement('h2');
		const description = document.createElement('p');
		const divSubTitle = document.createElement('div');
		const divTitlePrice = document.createElement('div');
		const imgPrice = document.createElement('img');
		const spanPrice = document.createElement('span');
		const divTitleRating = document.createElement('div');
		const imgRating = document.createElement('img');
		const spanRating = document.createElement('span');
		const divTitleCount = document.createElement('div');
		const imgCount = document.createElement('img');
		const spanCount = document.createElement('span');
		const buttonFavorite = document.createElement('button');


		divBoxItem.classList.add('box-item');
		divItemTop.classList.add('item-top');
		h2SupTitle.classList.add('sup-title');
		divItemBottom.classList.add('item-bottom');
		description.classList.add('description');
		divSubTitle.classList.add('sub-title');
		divTitlePrice.classList.add('title-price', 'title-item');
		divTitleRating.classList.add('title-rating', 'title-item');
		divTitleCount.classList.add('title-count', 'title-item');


		imgBag.src = product.image
		h2SupTitle.textContent = product.title.length > 20 ? product.title.slice(0, 20).trim() + "..." : product.title
		description.innerHTML = product.description.length > 100 ? product.description.slice(0, 100) + " <b class='more' >more...</b>" : product.description
		imgPrice.src = 'img/price.svg';
		spanPrice.textContent = product.price;
		imgRating.src = 'img/rating.svg';
		spanRating.textContent = product.rating.rate;
		imgCount.src = 'img/count.svg';
		spanCount.textContent = product.rating.count;
		buttonFavorite.textContent = 'В избранное';


		divBox.append(divBoxItem);
		divBoxItem.append(divItemTop);
		divItemTop.append(imgBag);
		divBoxItem.append(divItemBottom);
		divItemBottom.append(h2SupTitle, description, divSubTitle);
		divSubTitle.append(divTitlePrice);
		divTitlePrice.append(imgPrice, spanPrice);
		divSubTitle.append(divTitleRating);
		divTitleRating.append(imgRating, spanRating);
		divSubTitle.append(divTitleCount);
		divTitleCount.append(imgCount, spanCount);
		divItemBottom.append(buttonFavorite);

		if (cart.includes(product.id)) {
			buttonFavorite.classList.add('active-btn')
			buttonFavorite.innerText = "Добавлено"
		} else {
			buttonFavorite.innerText = "В избранное"
			buttonFavorite.classList.remove('active-btn')
		}

		buttonFavorite.onclick = () => {
			if (cart.includes(product.id)) {
				cart = cart.filter(id => id !== product.id)
				buttonFavorite.classList.remove('active-btn')
				buttonFavorite.innerText = "В избранное"
			} else {
				buttonFavorite.classList.add('active-btn')
				cart.push(product.id)
				buttonFavorite.innerText = "Добавлено"
			}
			cart_amount.innerHTML = cart.length
			cart_arr(cart)
		}
	}
}


cart_btn.onclick = () => {
	cart_side.style.width = 560
	cart_side.classList.remove("hide");
	cart_side.classList.add("show");
}

close_cart.onclick = () => {
	cart_side.classList.remove("show")
	cart_side.classList.add("hide")
}

selectAll.onchange = () => {
	cart_arr(cart)
}

cart_arr(cart)
function cart_arr(ids) {
	cart_box.innerHTML = ""
	total_price.innerHTML = 0
	let total = 0

	if (cart.length == '') {
		selectAll.checked = false
		selectAll.nextElementSibling.textContent = 'Выбрать все';
	}

	for (let product of arr) {
		for (let cart_id of ids) {
			if (cart_id === product.id) {
				const divider = document.createElement("div")
				const cart_item = document.createElement("div")
				const checkbox = document.createElement("input")
				const imgBox = document.createElement('div')
				const image = document.createElement("img")
				const item_title = document.createElement("div")
				const sup_title = document.createElement("h3")
				const sub_title = document.createElement("span")
				const sub_price = document.createElement("div")
				const inputBox = document.createElement("div")
				const inputField = document.createElement('input');
				const decrementButton = document.createElement('button');
				const incrementButton = document.createElement('button');
				const deleteBox = document.createElement("span")
				const deleteBtn = document.createElement("img")
				const price_amount = document.createElement("span")


				divider.classList.add("divider")
				cart_item.classList.add("cart-item")
				checkbox.classList.add("checkbox")
				imgBox.classList.add("img-box")
				item_title.classList.add("item-title")
				inputBox.classList.add("input-box")
				decrementButton.classList.add("decrement")
				incrementButton.classList.add("increment")
				deleteBox.classList.add("delete-box")
				deleteBtn.classList.add("delete")
				price_amount.classList.add("price-amount")
				sub_price.classList.add("sub-price")


				checkbox.type = "checkbox"
				image.src = product.image
				sup_title.innerHTML = product.title.length > 40 ? product.title.slice(0, 40) + "..." : product.title
				sub_title.innerHTML = product.category
				sub_price.innerHTML = `${product.price} долл./ед.`
				price_amount.innerHTML = product.price.toFixed(2) + " $"
				inputField.type = 'text';
				inputField.value = '1';
				inputField.minLength = "1"
				inputField.maxLength = product.rating.count
				decrementButton.textContent = '−';
				incrementButton.textContent = '+';
				deleteBtn.src = "img/trash.svg"


				deleteBox.append(deleteBtn)
				cart_box.append(divider, cart_item)
				cart_item.append(checkbox, imgBox, item_title, deleteBox, price_amount)
				imgBox.append(image)
				item_title.append(sup_title, sub_title, inputBox)
				inputBox.append(decrementButton, inputField, incrementButton, sub_price);

				deleteBtn.onclick = () => {
					cart = cart.filter(el => el !== product.id)
					reload(arr)
					cart_arr(cart)
					cart_amount.innerHTML = cart.length
				}
				del_all.onclick = () => {
					cart = []
					reload(arr)
					cart_arr(cart)
					cart_amount.innerHTML = cart.length
				}

				inputField.onblur = () => {
					if (inputField.value == 0) {
						inputField.value = 1
					} else if (inputField.value > product.rating.count) {
						inputField.value = product.rating.count
					}
					price_amount.innerHTML = formatNumber(product.price * inputField.value) + " $"
					updateTotalPrice();
				}
				inputField.oninput = () => {
					const inputValue = inputField.value;
					const filteredValue = inputValue.replace(/\D/g, '');
					inputField.value = filteredValue;
				};

				function formatNumber(number) {
					const formattedNumber = Number(number).toFixed(2);
					const parts = formattedNumber.toString().split('.');
					parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
					return parts.join('.');
				}

				decrementButton.onclick = () => {
					if (inputField.value == 2) {
						sub_price.style.display = "none"
					}
					if (inputField.value <= 1) {
						return
					} else {
						let value = parseInt(inputField.value);
						value--;
						inputField.value = value;
						price_amount.innerHTML = formatNumber(product.price * value) + " $"
						updateTotalPrice();
					}
				};

				incrementButton.onclick = () => {
					if (inputField.value >= product.rating.count) {
						return
					} else {
						sub_price.style.display = "block"
						let value = parseInt(inputField.value);
						value++;
						inputField.value = value;
						price_amount.innerHTML = formatNumber(product.price * value) + " $"
						updateTotalPrice();
					}
				};





				selectAll.checked = true
				checkbox.checked = selectAll.checked
				selectAll.nextElementSibling.innerHTML = 'Убрать все'

				updateTotalPrice();

				function updateTotalPrice() {
					total = 0;

					const checkboxes = document.querySelectorAll('.checkbox');
					checkboxes.forEach(function (checkbox, index) {
						let priceElement = document.querySelectorAll('.sub-price')[index]
						let inputValue = document.querySelectorAll('.input-box input')[index]
						if (checkbox.checked) {
							total += parseFloat(priceElement.textContent) * parseFloat(inputValue.value);
						}
					});

					total_price.textContent = formatNumber(total) + " $";
				}

				function checkboxChangeHandler() {
					updateTotalPrice();
				}

				let checkboxes = document.querySelectorAll('.checkbox');
				checkboxes.forEach(function (checkbox) {
					checkbox.onchange = () => {
						checkboxChangeHandler()
						updateCheckbox()
					}
				});


				selectAll.onchange = () => {
					checkboxes.forEach(checkbox => {
						checkbox.checked = selectAll.checked;
						checkboxChangeHandler()
					});
					updateCheckbox();
				};


				function updateCheckbox() {
					let allChecked = true;
					let allUnchecked = true;
					updateTotalPrice();

					checkboxes.forEach(checkbox => {
						if (checkbox.checked) {
							allUnchecked = false;
						} else {
							allChecked = false;
						}
					})
					if (allChecked) {
						selectAll.checked = true;
						selectAll.nextElementSibling.textContent = 'Убрать все';
					} else if (allUnchecked) {
						selectAll.checked = false;
						selectAll.nextElementSibling.textContent = 'Выбрать все';
					} else {
						selectAll.checked = false;
						selectAll.nextElementSibling.textContent = 'Выбрать все';
					}
				}
			};
		};
	}
}
