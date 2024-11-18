const menuToggle = document.querySelector('.menu-toggle')
const ToggleBTN = document.querySelector('.toggle-btn')
const menu = document.querySelector('.menu')
const elements = document.querySelectorAll('.animate')
const scrollToTopBtn = document.getElementById('scrollToTopBtn')
const currentYear = document.querySelector('#current-year')

currentYear.textContent = new Date().getFullYear()

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

function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}