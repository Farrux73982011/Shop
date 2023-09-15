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
		let divItemTop = document.createElement('div');
		let imgBag = document.createElement('img');
		let divItemBottom = document.createElement('div');
		let h2SupTitle = document.createElement('h2');
		let description = document.createElement('p');
		let divSubTitle = document.createElement('div');
		let divTitlePrice = document.createElement('div');
		let imgPrice = document.createElement('img');
		let spanPrice = document.createElement('span');
		let divTitleRating = document.createElement('div');
		let imgRating = document.createElement('img');
		let spanRating = document.createElement('span');
		let divTitleCount = document.createElement('div');
		let imgCount = document.createElement('img');
		let spanCount = document.createElement('span');
		let buttonFavorite = document.createElement('button');



		divBoxItem.classList.add('box-item');
		divItemTop.classList.add('item-top');
		imgBag.src = item.image;
		divItemBottom.classList.add('item-bottom');
		h2SupTitle.classList.add('sup-title');
		h2SupTitle.textContent = item.title;
		description.classList.add('description');
		description.innerHTML = item.description
		divSubTitle.classList.add('sub-title');
		divTitlePrice.classList.add('title-price', 'title-item');
		imgPrice.src = '../img/Group 7.png';
		spanPrice.textContent = item.price;
		divTitleRating.classList.add('title-rating', 'title-item');
		imgRating.src = '../img/Group 10.svg';
		spanRating.textContent = item.rating.rate;
		divTitleCount.classList.add('title-count', 'title-item');
		imgCount.src = '../img/Group 9.png';
		spanCount.textContent = item.rating.count;
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
