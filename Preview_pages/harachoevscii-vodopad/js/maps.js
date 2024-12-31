ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map', {
			center: [42.908465148167885,46.13741095103597],
			zoom: 21,
		})

    let placemark = new ymaps.Placemark(
			[42.908465148167885, 46.13741095103597],
			{
				balloonContent: `
                <div class="balloon-content">
                    <h3>Харачойский водопад</h3>
                    <p>Харачойский водопад — гидрологический памятник природы, расположенный в Веденском районе Чечни на северо-западной окраине горного селения Харачой.</p>
                    <img src="https://mr-eldar.github.io/Chechen-Tourism/Preview_pages/harachoevscii-vodopad/images/img2.jpg" alt="Харачойский водопад">
                </div>`,
			},
			{
				preset: 'islands#icon',
				iconColor: '#0095b6',
			}
		)

    map.geoObjects.add(placemark);
}