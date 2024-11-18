const scrollToTopBtn = document.getElementById('scrollToTopBtn')

function handleScroll() {
	if (window.scrollY > 500) {
		scrollToTopBtn.classList.add('active')
	} else {
		scrollToTopBtn.classList.remove('active')
	}
}

window.addEventListener('scroll', handleScroll)
scrollToTopBtn.addEventListener('click', scrollToTop)

function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}