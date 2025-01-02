// Функция для показа уведомления
function showNotification(message) {
	const notification = document.querySelector('.notification')
	if (!notification) return

	// Изменяем текст уведомления
	notification.querySelector('.notification__title').textContent = message

	// Показываем уведомление
	notification.classList.add('show')

	// Убираем уведомление через 3 секунды
	setTimeout(() => {
		notification.classList.remove('show')
	}, 3000)
}

document.addEventListener('DOMContentLoaded', () => {
	const favoriteButtons = document.querySelectorAll('.btnAddHeartToFavorites')

	favoriteButtons.forEach(button => {
		button.addEventListener('click', e => {
			const card = e.target.closest('.list__item') // Находим карточку
			const cardData = {
				id: card.dataset.id, // Уникальный ID карточки
				title: card.querySelector('h1').textContent.trim(),
				description: card.querySelector('p').textContent.trim(),
				imgSrc: card.querySelector('img').src,
				pageLink: card.querySelector('.buttons a').href,
			}

			// Получаем текущие избранные карточки из localStorage
			const favorites = JSON.parse(localStorage.getItem('favorites')) || []

			if (!favorites.some(item => item.id === cardData.id)) {
				favorites.push(cardData) // Добавляем новую карточку
				localStorage.setItem('favorites', JSON.stringify(favorites)) // Сохраняем в localStorage
				showNotification('Карточка успешно добавлена!') // Показываем уведомление
			} else {
				showNotification('Эта карточка уже в избранном.') // Показываем уведомление для дубликата
			}
		})
	})
})