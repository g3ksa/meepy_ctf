import { districtByIso, districtColors, districtsHints } from "./data";

export function init() {

	let map = new ymaps.Map('map', {
		center: [0, 0],
		zoom: 1,
		type: null,
		controls: ['zoomControl']
	},{
		restrictMapArea: false
	});
	map.controls.get('zoomControl').options.set({size: 'small'});

	let opacity

	let pane = new ymaps.pane.StaticPane(map, {
		zIndex: 100, css: {
			width: '100%', height: '100%', backgroundColor: '#252528', opacity: 0.2
		}
	});
	map.panes.append('white', pane);

	let districtBalloon = new ymaps.Balloon(map);
	districtBalloon.options.setParent(map.options);

	ymaps.borders.load('001', {
		lang: 'ru',
		quality: 2
	}).then(function (result) {

		let districtCollections = {};

		for (let district in districtColors) {
			if(district == 'Other'){
				districtCollections[district] = new ymaps.GeoObjectCollection(null, {
					fillColor: districtColors[district],
					strokeColor: '#333',
					strokeOpacity: 0.1,
					fillOpacity: 1,
					hintCloseTimeout: 0,
					hintOpenTimeout: 0
				});
			}else{
				districtCollections[district] = new ymaps.GeoObjectCollection(null, {
					fillColor: districtColors[district],
					strokeColor: '#333',
					strokeOpacity: 0.3,
					fillOpacity: 1,
					hintCloseTimeout: 0,
					hintOpenTimeout: 0
				});
			}
			

			districtCollections[district].properties.districts = [];
		}
		
		result.features.forEach(function (feature) {
			let iso = feature.properties.iso3166;
			let name = feature.properties.name;
			let district;
			if(districtByIso[iso]){
				district = districtByIso[iso];

				feature.properties.hintContent = `${name} (${districtsHints[district]})`;

				districtCollections[district].add(new ymaps.GeoObject(feature));

				districtCollections[district].properties.districts.push(name);
			}else{
				district = 'Other';

				feature.properties.hintContent = name;

				districtCollections[district].add(new ymaps.GeoObject(feature));

				districtCollections[district].properties.districts.push(name);
			}
			
		});


		for (let districtName in districtCollections) {

			map.geoObjects.add(districtCollections[districtName]);
			// if (districtName !== 'Other'){

			// 	districtCollections[districtName].events.add('mouseenter', function (event) {
			// 		let district = event.get('target').getParent();					
			// 	});

			// 	districtCollections[districtName].events.add('mouseleave', function (event) {
			// 		let district = event.get('target').getParent();
			// 	});
			// }
		}
	})
}
