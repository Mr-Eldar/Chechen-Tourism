ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map', {
			center: [43.32663907228537, 45.67910237368006],
			zoom: 17,
		})

    let placemark = new ymaps.Placemark(
			[43.32663907228537, 45.67910237368006],
			{
				balloonContent: `
                <div class="balloon-content">
                    <h3>Мемориальный комплекс славы</h3>
                    <p>Мемориальный комплекс Славы им. А.А. Кадырова — мемориал, посвященный Победе в Великой Отечественной войне, а также первому президенту Чеченской Республики.</p>
                    <img src="https://mr-eldar.github.io/Chechen-Tourism/Preview_pages/memorial-complecks/images/img1.jpg" alt="Хой">
                </div>`,
			},
			{
				preset: 'islands#icon',
				iconColor: '#0095b6',
			}
		)

    map.geoObjects.add(placemark);
}