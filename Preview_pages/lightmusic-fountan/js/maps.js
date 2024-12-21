ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map', {
			center: [43.26914589042423,45.662439539792075],
			zoom: 17,
		})

    let placemark = new ymaps.Placemark(
			[43.26914589042423, 45.662439539792075],
			{
				balloonContent: `
                <div class="balloon-content">
                    <h3>Светомузыкальный фонтан</h3>
                    <p>Один из самых красивых фонтанов России находится в Грозном.</p>
                    <img src="/Page_Fife/images/fountan.jpg" alt="Хой">
                </div>`,
			},
			{
				preset: 'islands#icon',
				iconColor: '#0095b6',
			}
		)

    map.geoObjects.add(placemark);
}