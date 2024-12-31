ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map', {
			center: [42.629444, 45.806120],
			zoom: 17,
		})

    let placemark = new ymaps.Placemark(
			[42.6302, 45.806],
			{
				balloonContent: `
                <div class="balloon-content">
                    <h3>Шаройский историко-архитектурный комплекс</h3>
                    <p>Шаройский историко-архитектурный комплекс расположен в селе Шарой Шаройского района Чечни.</p>
                    <img src="https://mr-eldar.github.io/Chechen-Tourism/Preview_pages/sharoiscii-compleks/images/sharoiskii-complecks.jpeg" alt="Хой">
                </div>`,
			},
			{
				preset: 'islands#icon',
				iconColor: '#0095b6',
			}
		)

    map.geoObjects.add(placemark);
}