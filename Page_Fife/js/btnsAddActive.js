const menuToggle = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu')
const ToggleBTN = document.querySelector('.toggle-btn')
const PlacesCategoryList = document.querySelector('.places_category__list')
const AddSolidOrRegularToHeart = document.querySelectorAll('.heart')

menuToggle.addEventListener('click', () => {
	menu.classList.toggle('active')
	menuToggle.classList.toggle('active')
})

ToggleBTN.addEventListener('click', () => {
	ToggleBTN.classList.toggle('active')
	PlacesCategoryList.classList.toggle('active')
})

AddSolidOrRegularToHeart.forEach(heart => {
	const heartExplosion = heart.parentElement.querySelector('.heart-explosion') // Находим контейнер для взрыва в родителе

	heart.addEventListener('click', () => {
		// Переключение классов для изменения иконки
		heart.classList.toggle('fa-solid')
		heart.classList.toggle('fa-regular')

		// Меняем цвет
		heart.style.color = '#ff5757'

		// Создаем салют
		createExplosion(heartExplosion)
	})
})

// Функция создания салюта
function createExplosion(heartExplosion) {
	heartExplosion.innerHTML = '' // Очищаем предыдущие частицы

	for (let i = 0; i < 10; i++) {
		const span = document.createElement('span')

		// Устанавливаем случайные направления
		const randomX = (Math.random() * 2 - 1).toFixed(2)
		const randomY = (Math.random() * 2 - 1).toFixed(2)

		span.style.setProperty('--x', randomX)
		span.style.setProperty('--y', randomY)

		heartExplosion.appendChild(span)
	}

	// Удаляем частицы через 600ms
	setTimeout(() => {
		heartExplosion.innerHTML = ''
	}, 600)
}