ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map', {
			center: [42.93387248913724,46.35046605982967],
			zoom: 17,
		})

    let placemark = new ymaps.Placemark(
			[42.93387248913724, 46.35046605982967],
			{
				balloonContent: `
                <div class="balloon-content">
                    <h3>Ахки Тай</h3>
                    <p>Ахки Тай — это красивое место в горах Чечни, где можно насладиться чистым воздухом и прекрасными видами водопадов</p>
                    <img src="https://mr-eldar.github.io/Chechen-Tourism/Preview_pages/ahki-tay/images/img3.jpg" alt="Аргунское ущелье">
                </div>`,
			},
			{
				preset: 'islands#icon',
				iconColor: '#0095b6',
			}
		)

    map.geoObjects.add(placemark);
}