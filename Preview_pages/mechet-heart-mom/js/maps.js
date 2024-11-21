ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map', {
			center: [43.2923954274862, 45.868234961384516],
			zoom: 17,
		})

    let placemark = new ymaps.Placemark(
			[43.2923954274862, 45.868234961384516],
			{
				balloonContent: `
                <div class="balloon-content">
                    <h3>Мечеть «Средце Матери»</h3>
                    <p>Мечеть имени Аймани Кадыровой построена в стиле хай-тек и является первой мечетью на территории России, выполненной в ультрасовременном виде.</p>
                    <img src="/Preview_pages/mechet-heart-mom/images/img1.jpg">
                </div>`,
			},
			{
				preset: 'islands#icon',
				iconColor: '#0095b6',
			}
		)

    map.geoObjects.add(placemark);
}