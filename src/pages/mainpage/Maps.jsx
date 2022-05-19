import { useEffect } from 'react';
import { AnimatedPage } from '../../components/AnimatedPage';
import { init } from '../../components/map/regions_districts';


function Maps(){
	useEffect(() => {
		ymaps.ready(init);
	})
	return (
		<div className="map__row">
			<div className="map__title title">
				Интерактивная карта офшорных зон
			</div>
			<div id="map" className="map__item"/>
		</div>
	);
}

export default Maps;