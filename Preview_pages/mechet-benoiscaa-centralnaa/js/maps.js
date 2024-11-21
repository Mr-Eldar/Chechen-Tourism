ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map', {
			center: [42.988611, 46.324167],
			zoom: 17,
		})

    let placemark = new ymaps.Placemark(
			[42.988611, 46.324167],
			{
				balloonContent: `
                <div class="balloon-content">
                    <h3>бенойская центральная мечеть</h3>
                    <p>Бенойская главная мечеть находится в горной части Чеченской республики на высоте 945 метров над уровнем моря.</p>
                    <img src="/Preview_pages/mechet-benoiscaa-centralnaa/images/img2.jpg">
                </div>`,
			},
			{
				preset: 'islands#icon',
				iconColor: '#0095b6',
			}
		)

    map.geoObjects.add(placemark);
}