ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map', {
			center: [42.83997079895385, 45.6668545],
			zoom: 17,
		})

    let placemark = new ymaps.Placemark(
			[42.83997079895385, 45.6668545],
			{
				balloonContent: `
                <div class="balloon-content">
                    <h3>Нихалойские водопады</h3>
                    <p>Нихалойские водопады — одна из самых ярких природных «жемчужин» Чеченской Республики.</p>
                    <img src="https://mr-eldar.github.io/Chechen-Tourism/Preview_pages/nihaloevscie-vodopadi/images/nihaloevscie-vodopadi.jpg" alt="Аргунское ущелье">
                </div>`,
			},
			{
				preset: 'islands#icon',
				iconColor: '#0095b6',
			}
		)

    map.geoObjects.add(placemark);
}