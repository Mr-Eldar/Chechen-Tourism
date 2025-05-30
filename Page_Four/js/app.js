const menuToggle = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu')
const scrollToTopBtn = document.getElementById('scrollToTopBtn')
const elements = document.querySelectorAll('.animate')
const btnsAnimate = document.querySelectorAll('.btn .btn__arrow')

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show')
		}
	})
})

elements.forEach(element => observer.observe(element))

menuToggle.addEventListener('click', () => {
	menu.classList.toggle('active')
	menuToggle.classList.toggle('active')
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth',
		})
	})
})

function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}

function handleScroll() {
	if (window.scrollY > 1000) {
		scrollToTopBtn.classList.add('active')
	} else {
		scrollToTopBtn.classList.remove('active')
	}
}

window.addEventListener('scroll', handleScroll)
scrollToTopBtn.addEventListener('click', scrollToTop)