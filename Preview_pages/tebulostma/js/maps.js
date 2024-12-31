ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map', {
			center: [42.57344128683904, 45.31166950000001],
			zoom: 17,
		})

    let placemark = new ymaps.Placemark(
			[42.57344128683904, 45.31166950000001],
			{
				balloonContent: `
                <div class="balloon-content">
                    <h3>Тебулостма</h3>
                    <p>Тебулосмта находится на границе Чеченской Республики и Грузии. Она расположена в Боковом хребте Большого Кавказа</p>
                    <img src="https://mr-eldar.github.io/Chechen-Tourism/Preview_pages/tebulostma/images/tebulostma.jpg" alt="Аргунское ущелье">
                </div>`,
			},
			{
				preset: 'islands#icon',
				iconColor: '#0095b6',
			}
		)

    map.geoObjects.add(placemark);
}