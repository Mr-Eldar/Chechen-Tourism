ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map', {
			center: [43.1568611957513, 45.90431729762263],
			zoom: 17,
		})

    let placemark = new ymaps.Placemark(
			[43.1568611957513, 45.90431729762263],
			{
				balloonContent: `
                <div class="balloon-content">
                    <h3>Мечеть «Гордость мусульман»</h3>
                    <p>Мечеть имени Пророка Мухаммада «Гордость мусульман» является самой большой в Европе. Ее вместимость 30 тысяч человек.</p>
                    <img src="https://mr-eldar.github.io/Chechen-Tourism/Preview_pages/mechet-gordost-musulman/images/img4.jpg">
                </div>`,
			},
			{
				preset: 'islands#icon',
				iconColor: '#0095b6',
			}
		)

    map.geoObjects.add(placemark);
}