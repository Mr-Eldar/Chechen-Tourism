ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map', {
			center: [43.31755542968697,45.69397156641283],
			zoom: 17,
		})

    let placemark = new ymaps.Placemark(
			[43.31755542968697, 45.69397156641283],
			{
				balloonContent: `
                <div class="balloon-content">
                    <h3>Мечеть «Средце Чечни»</h3>
                    <p>Одна из самых масштабных мечетей Европы находится в живописном и горном краю нашей страны, в сердце красивейшей кавказской республики Чечня</p>
                    <img src="https://mr-eldar.github.io/Chechen-Tourism/Preview_pages/mechet-heart-chechen/images/img1.jpg">
                </div>`,
			},
			{
				preset: 'islands#icon',
				iconColor: '#0095b6',
			}
		)

    map.geoObjects.add(placemark);
}