ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map', {
			center: [42.87234901669074, 45.30407449999997],
			zoom: 17,
		})

    let placemark = new ymaps.Placemark(
			[42.87234901669074, 45.30407449999997],
			{
				balloonContent: `
                <div class="balloon-content">
                    <h3>Озеро Галанчож</h3>
                    <p>Галанчожское озеро находится в горной Чечне, на северных отрогах Скалистого хребтом Юкерлаш, в верховьях бассейна реки Гехи.</p>
                    <img src="/Page_Fife/images/galanchoj.jpg" alt="Кезеной-Ам">
                </div>`,
			},
			{
				preset: 'islands#icon',
				iconColor: '#0095b6',
			}
		)

    map.geoObjects.add(placemark);
}