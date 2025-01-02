document.addEventListener('DOMContentLoaded', () => {
	const favoritesList = document.getElementById('favoritesList')
	const favorites = JSON.parse(localStorage.getItem('favorites')) || []

	if (favorites.length === 0) {
		favoritesList.innerHTML = '<p>Нет избранных мест.</p>'
		return
	}

	favorites.forEach(card => {
		const listItem = document.createElement('li')
		listItem.classList.add('list__item')
		listItem.dataset.id = card.id // Устанавливаем ID карточки

		listItem.innerHTML = `
            <div class="item__img">
                <img src="${card.imgSrc}" alt="${card.title}">
            </div>
            <div class="btnAddHeartToFavorites">
                <i title="добавление в избранные места" class="fa-solid fa-heart heart"></i>
                <div class="heart-explosion"></div>
            </div>
            <div class="desc__btns">
                <div class="item__description">
                    <h1>${card.title}</h1>
                    <div class="item__line"></div>
                    <p>${card.description}</p>
                    <div class="item__line"></div>
                </div>
                <div class="buttons">
                    <a href="${card.pageLink}">
                        <button class="btn">Перейти <i class="fa-solid fa-arrow-right arrow"></i></button>
                    </a>
                    <a href="${card.pageLink}">
                        <button class="btn">Карта <i class="fa-solid fa-location-dot map"></i></button>
                    </a>
                </div>
            </div>
        `
		favoritesList.appendChild(listItem)
	})
})

document.getElementById('clearFavoritList__btn').addEventListener('click', () => {
		// Удаляем список избранного из localStorage
		localStorage.removeItem('favorites')

		// Очищаем HTML-список
		const favoritesList = document.getElementById('favoritesList')
		favoritesList.innerHTML = '<p class="emptyListText">Нет избранных достапремичательств.</p>'
})