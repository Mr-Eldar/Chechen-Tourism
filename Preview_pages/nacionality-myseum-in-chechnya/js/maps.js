ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map', {
			center: [43.324151988570186, 45.68230323777481],
			zoom: 17,
		})

    let placemark = new ymaps.Placemark(
			[43.324151988570186, 45.68230323777481],
			{
				balloonContent: `
                <div class="balloon-content">
                    <h3>Национальный музей</h3>
                    <p>Национальный музей Чеченской Республики представляет собой объединение двух музеев, существующих ранее отдельно друг от друга, это: Чеченский Республиканский музей изобразительных искусств им. Захарова П.З. (1961) и Чеченский государственный объединенный музей (1924). Соединение музеев произошло в 1996 году.</p>
                    <img src="https://mr-eldar.github.io/Chechen-Tourism/Preview_pages/nacionality-myseum-in-chechnya/images/3.jpg" alt="Хой">
                </div>`,
			},
			{
				preset: 'islands#icon',
				iconColor: '#0095b6',
			}
		)

    map.geoObjects.add(placemark);
}