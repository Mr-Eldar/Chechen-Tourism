ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map', {
			center: [42.75186364753247,46.13032737517482],
			zoom: 17,
		})

    let placemark = new ymaps.Placemark(
			[42.75186364753247, 46.13032737517482],
			{
				balloonContent: `
                <div class="balloon-content">
                    <h3>Древний город Хой</h3>
                    <p>Сегодня Хой является популярным туристическим направлением. В последнее время ведётся работа по восстановлению и сохранению культурного наследия аула.</p>
                    <img src="/Preview_pages/hoi/images/img1.jpg" alt="Хой">
                </div>`,
			},
			{
				preset: 'islands#icon',
				iconColor: '#0095b6',
			}
		)

    map.geoObjects.add(placemark);
}