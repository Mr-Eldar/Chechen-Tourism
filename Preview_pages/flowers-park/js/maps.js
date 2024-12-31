ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map', {
			center: [43.31391265931143, 45.698647253967266],
			zoom: 17,
		})

    let placemark = new ymaps.Placemark(
			[43.31391265931143, 45.698647253967266],
			{
				balloonContent: `
                <div class="balloon-content">
                    <h3>Цветочный парк</h3>
                    <p>Цветочный парк поражает своей красотой и разнообразием. Здесь вы найдете клумбы, оформленные в виде сложных узоров, живые арки из цветов.</p>
                    <img src="https://mr-eldar.github.io/Chechen-Tourism/Preview_pages/flowers-park/images/img1.jpg" alt="Хой">
                </div>`,
			},
			{
				preset: 'islands#icon',
				iconColor: '#0095b6',
			}
		)

    map.geoObjects.add(placemark);
}