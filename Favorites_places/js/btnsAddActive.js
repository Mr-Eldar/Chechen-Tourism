const menuToggle = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu')
const ToggleBTN = document.querySelector('.toggle-btn')
const PlacesCategoryList = document.querySelector('.places_category__list')

menuToggle.addEventListener('click', () => {
	menu.classList.toggle('active')
	menuToggle.classList.toggle('active')
})