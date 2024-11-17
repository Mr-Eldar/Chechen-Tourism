ymaps.ready(init);

function init() {
    // Первая карта
    let map = new ymaps.Map('map', {
        center: [42.77232294655294, 46.15207493121335],
        zoom: 13
    });

    let placemark = new ymaps.Placemark(
        [42.77232294655294, 46.15207493121335],
        {
            balloonContent: `
                <div class="balloon-content">
                    <h3>Озеро Кезеной-Ам</h3>
                    <p>Это одно из самых красивых озер на Кавказе, расположенное в горах Чечни.</p>
                    <img src="/Images/1.jpg" alt="Кезеной-Ам">
                </div>`
        },
        {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }
    );

    map.geoObjects.add(placemark);
}