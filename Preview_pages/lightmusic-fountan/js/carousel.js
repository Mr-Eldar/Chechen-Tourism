let currentSlide = 0
const slides = document.querySelectorAll('.slide')
const dots = document.querySelectorAll('.dot')
const totalSlides = slides.length

document.querySelector('.next').addEventListener('click', () => {
	goToSlide(currentSlide + 1)
})

document.querySelector('.prev').addEventListener('click', () => {
	goToSlide(currentSlide - 1)
})

dots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		goToSlide(index)
	})
})

function goToSlide(index) {
	if (index >= totalSlides) {
		currentSlide = 0
	} else if (index < 0) {
		currentSlide = totalSlides - 1
	} else {
		currentSlide = index
	}

	document.querySelector('.slider').style.transform = `translateX(-${
		currentSlide * 100
	}%)`

	// Update active dot
	dots.forEach(dot => dot.classList.remove('active'))
	dots[currentSlide].classList.add('active')
}

// Auto-slide functionality (optional)
setInterval(() => {
	goToSlide(currentSlide + 1)
}, 3000)
