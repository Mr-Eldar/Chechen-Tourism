ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map', {
			center: [42.6708333, 45.1763889],
			zoom: 17,
		})

    let placemark = new ymaps.Placemark(
			[42.6708333, 45.1763889],
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