ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map', {
			center: [42.822778, 45.365556],
			zoom: 17,
		})

    let placemark = new ymaps.Placemark(
			[42.823, 45.365556],
			{
				balloonContent: `
                <div class="balloon-content">
                    <h3>Никарой</h3>
                    <p>Никарой состоит из пятиэтажной боевой башни с пирамидально-ступенчатой кровлей, одной полубоевой, достигающей в высоту шесть этажей</p>
                    <img src="https://mr-eldar.github.io/Chechen-Tourism/Preview_pages/nikaroi/images/nikaroi.jpeg" alt="Хой">
                </div>`,
			},
			{
				preset: 'islands#icon',
				iconColor: '#0095b6',
			}
		)

    map.geoObjects.add(placemark);
}