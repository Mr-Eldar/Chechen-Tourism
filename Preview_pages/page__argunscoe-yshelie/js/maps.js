ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map', {
			center: [42.83243440033579, 45.87450202072145],
			zoom: 17,
		})

    let placemark = new ymaps.Placemark(
			[42.83243440033579, 45.87450202072145],
			{
				balloonContent: `
                <div class="balloon-content">
                    <h3>Аргунское ущелье</h3>
                    <p>Аргунское ущелье, простирающееся более 100 км от Черных гор до Хевсуретии (Грузия)</p>
                    <img src="/Page_Fife/images/argunscoe-yshelie.jpg" alt="Аргунское ущелье">
                </div>`,
			},
			{
				preset: 'islands#icon',
				iconColor: '#0095b6',
			}
		)

    map.geoObjects.add(placemark);
}