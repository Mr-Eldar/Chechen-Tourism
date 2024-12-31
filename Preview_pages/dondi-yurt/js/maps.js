ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map', {
			center: [43.14131638226231, 45.51795814813231],
			zoom: 17,
		})

    let placemark = new ymaps.Placemark(
			[43.14131638226231, 45.51795814813231],
			{
				balloonContent: `
                <div class="balloon-content">
                    <h3>Донди-Юрт</h3>
                    <p>Музей представляет собой отстроенный древний аул, занимающий территорию в 20-30 кв.м.</p>
                    <img src="https://mr-eldar.github.io/Chechen-Tourism/Preview_pages/dondi-yurt/images/img2.jpg" alt="Аргунское ущелье">
                </div>`,
			},
			{
				preset: 'islands#icon',
				iconColor: '#0095b6',
			}
		)

    map.geoObjects.add(placemark);
}