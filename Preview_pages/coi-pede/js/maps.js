ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map', {
			center: [42.70839567914588,45.25862353356579],
			zoom: 17,
		})

    let placemark = new ymaps.Placemark(
			[42.70839567914588, 45.25862353356579],
			{
				balloonContent: `
                <div class="balloon-content">
                    <h3>Цой-Педе</h3>
                    <p>Цой-Педе — боевая башня на юге Чечни, в исторической области Малхиста.</p>
                    <img src="https://mr-eldar.github.io/Chechen-Tourism/Preview_pages/coi-pede/images/img2.jpg" alt="Аргунское ущелье">
                </div>`,
			},
			{
				preset: 'islands#icon',
				iconColor: '#0095b6',
			}
		)

    map.geoObjects.add(placemark);
}