const itemLinks = document.querySelectorAll('.item__link')

itemLinks.forEach((itemLink) => {
    itemLink.addEventListener('mouseenter', () => {
        itemLink.classList.add('active')
    })

    itemLink.addEventListener('mouseleave', () => {
        itemLink.classList.remove('active')
    })
})