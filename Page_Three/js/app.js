const menuToggle = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu')
const scrollToTopBtn = document.getElementById('scrollToTopBtn')
const elements = document.querySelectorAll('.animate')
const fullNameInput = document.getElementById('fullName')
const btnsAnimate = document.querySelectorAll('.btn .btn__arrow')
const phoneInput = document.getElementById('phone');
const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show')
		}
	})
})

phoneInput.addEventListener('input', function() {
	const matrix = '+7 (___) ___-__-__';
	let i = 0;
	const def = matrix.replace(/\D/g, '');
	let val = this.value.replace(/\D/g, '');
	
	if (def.length >= val.length) {
		val = def;
	}
	
	this.value = matrix.replace(/./g, function(a) {
		return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
	});
});

phoneInput.addEventListener('keydown', function(e) {
	if (e.key.match(/[^0-9\+\(\)\-\s]/) && e.key !== 'Backspace') {
		e.preventDefault();
	}
});

fullNameInput.addEventListener('input', function (e) {
	this.value = this.value.replace(/[^А-Яа-яЁёA-Za-z\s]/g, '') 
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