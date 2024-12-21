ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map', {
			center: [43.31579030396411, 45.69797244113922],
			zoom: 17,
		})

    let placemark = new ymaps.Placemark(
			[43.31579030396411, 45.69797244113922],
			{
				balloonContent: `
                <div class="balloon-content">
                    <h3>Грозный Сити</h3>
                    <p>Грозный-Сити — это современный комплекс небоскрёбов, расположенный в центре Грозного на берегу реки Сунжа.</p>
                    <img src="/Preview_pages/grozny-city/images/img1.jpg" alt="Хой">
                </div>`,
			},
			{
				preset: 'islands#icon',
				iconColor: '#0095b6',
			}
		)

    map.geoObjects.add(placemark);
}