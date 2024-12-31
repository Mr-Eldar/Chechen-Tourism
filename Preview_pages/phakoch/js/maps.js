ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map', {
			center: [42.7286, 45.5722],
			zoom: 17,
		})

    let placemark = new ymaps.Placemark(
			[42.7286, 45.5722],
			{
				balloonContent: `
                <div class="balloon-content">
                    <h3>Пхакоч</h3>
                    <p>Пхакоч – памятник средневекового зодчества. Ученые до сих пор не знают, когда замок был возведен</p>
                    <img src="https://mr-eldar.github.io/Chechen-Tourism/Preview_pages/phakoch/images/img1.jpg" alt="Аргунское ущелье">
                </div>`,
			},
			{
				preset: 'islands#icon',
				iconColor: '#0095b6',
			}
		)

    map.geoObjects.add(placemark);
}