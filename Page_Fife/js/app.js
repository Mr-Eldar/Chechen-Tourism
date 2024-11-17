const menuToggle = document.querySelector('.menu-toggle')
const ToggleBTN = document.querySelector('.toggle-btn')
const menu = document.querySelector('.menu')
const elements = document.querySelectorAll('.animate')
const PlacesCategoryList = document.querySelector('.places_category__list')
const scrollToTopBtn = document.getElementById('scrollToTopBtn')
const listItemAnimate = document.querySelector('list__item')
const showAnimate = document.querySelector('desc__btns')

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show')
		}
	})
})

elements.forEach(element => observer.observe(element))

function handleScroll() {
	if (window.scrollY > 500) {
		scrollToTopBtn.classList.add('active')
	} else {
		scrollToTopBtn.classList.remove('active')
	}
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth',
		})
	})
})

window.addEventListener('scroll', handleScroll)
scrollToTopBtn.addEventListener('click', scrollToTop)

menuToggle.addEventListener('click', () => {
	menu.classList.toggle('active')
	menuToggle.classList.toggle('active')
})

ToggleBTN.addEventListener('click', () => {
	ToggleBTN.classList.toggle('active')
	PlacesCategoryList.classList.toggle('active')
})

listItemAnimate.addEventListener('mouseenter', () => {
	showAnimate.add.toggle('show-animate')
})

function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}