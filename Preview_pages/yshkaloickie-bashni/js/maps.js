ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map', {
			center: [42.7880, 45.6187],
			zoom: 17,
		})

    let placemark = new ymaps.Placemark(
			[42.7879, 45.6187],
			{
				balloonContent: `
                <div class="balloon-content">
                    <h3>Ушкалойские башни</h3>
                    <p>Ушкалойские башни — средневековый памятник на скале в живописном Аргунском ущелье.</p>
                    <img src="https://mr-eldar.github.io/Chechen-Tourism/Preview_pages/yshkaloickie-bashni/images/img1.jpg" alt="Аргунское ущелье">
                </div>`,
			},
			{
				preset: 'islands#icon',
				iconColor: '#0095b6',
			}
		)

    map.geoObjects.add(placemark);
}