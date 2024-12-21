ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map', {
			center: [43.26708214063584,45.71729260048459],
			zoom: 17,
		})

    let placemark = new ymaps.Placemark(
			[43.26708214063584,45.71729260048459],
			{
				balloonContent: `
                <div class="balloon-content">
                    <h3>Лестница в небеса</h3>
                    <p>"Лестница в небеса" находится в одном из крупных парков Грозного. Смотровая площадка сочетает в себе стильный дизайн и потрясающий вид на город.</p>
                    <img src="/Preview_pages/layer-in-sky/images/img2.jpg" alt="Хой">
                </div>`,
			},
			{
				preset: 'islands#icon',
				iconColor: '#0095b6',
			}
		)

    map.geoObjects.add(placemark);
}