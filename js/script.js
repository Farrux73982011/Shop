let container_box = document.querySelector('.box')
let show_first_five = document.querySelector('.show-first-five')
let show_all = document.querySelector('.show-all')

show_first_five.onclick = () => {
	reload(arr.slice(0, 5))
}

show_all.onclick = () => {
	reload(arr)
}

reload(arr)

function reload(data) {	
	container_box.innerHTML = ''
	
	for (let item of data) {
		let divBoxItem = document.createElement('div');
		divBoxItem.classList.add('box-item');

		let divItemTop = document.createElement('div');
		divItemTop.classList.add('item-top');

		let imgBag = document.createElement('img');
		imgBag.src = item.image;

		let divItemBottom = document.createElement('div');
		divItemBottom.classList.add('item-bottom');

		let h2SupTitle = document.createElement('h2');
		h2SupTitle.classList.add('sup-title');
		h2SupTitle.textContent = item.title;

		let description = document.createElement('p');
		description.classList.add('description');
		description.innerHTML = item.description

		let divSubTitle = document.createElement('div');
		divSubTitle.classList.add('sub-title');

		let divTitlePrice = document.createElement('div');
		divTitlePrice.classList.add('title-price', 'title-item');

		let imgPrice = document.createElement('img');
		imgPrice.src = '../img/Group 7.png';

		let spanPrice = document.createElement('span');
		spanPrice.textContent = item.price;

		let divTitleRating = document.createElement('div');
		divTitleRating.classList.add('title-rating', 'title-item');

		let imgRating = document.createElement('img');
		imgRating.src = '../img/Group 10.svg';

		let spanRating = document.createElement('span');
		spanRating.textContent = item.rating.rate;

		let divTitleCount = document.createElement('div');
		divTitleCount.classList.add('title-count', 'title-item');

		let imgCount = document.createElement('img');
		imgCount.src = '../img/Group 9.png';

		let spanCount = document.createElement('span');
		spanCount.textContent = item.rating.count;

		let buttonFavorite = document.createElement('button');
		buttonFavorite.textContent = 'В избранное';

		container_box.append(divBoxItem);
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
}}
