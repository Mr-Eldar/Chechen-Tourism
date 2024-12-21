ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map', {
			center: [43.19973119041623,45.90587600313076],
			zoom: 17,
		})

    let placemark = new ymaps.Placemark(
			[43.19973119041623,45.90587600313076],
			{
				balloonContent: `
                <div class="balloon-content">
                    <h3>Шира-Юрт</h3>
                    <p>Архитектурно-этнографический музей «Шира-Юрт» расположен в селе Герменчук в Чеченской республике</p>
                    <img src="/Preview_pages/shira-yurt/images/img1.jpg" alt="Хой">
                </div>`,
			},
			{
				preset: 'islands#icon',
				iconColor: '#0095b6',
			}
		)

    map.geoObjects.add(placemark);
}