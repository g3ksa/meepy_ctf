import { AnimatedPage } from '../../components/AnimatedPage';

const Tasks = () => {
	return (
		<div className="container">
			<div className="tasks__row">
				<div className="tasks__title title">
					Цели и задачи
				</div>
				<div className="points">
					<div className="points__title">
						Цели:
					</div>
					<ol className="points__items">
						<li className="ol__item">оставить полную картину передвижения денег с использованием офшорных зон</li>
					</ol>
				</div>
				<div className="tasks">
					<div className="tasks__title">
						Задачи:
					</div>
					<ol className="tasks__items">
						<li className="ol__item">Выяснить для чего нужны офшорные зоны и чем они так привлекательны для предпринимателей и не только</li>
						<li className="ol__item">Узнать сколько денег приходит в экономику России через офшоры</li>
						<li className="ol__item">Показать связаны ли российские банки с офшорными зонами и каким образом, если связаны</li>
						<li className="ol__item">Выяснить основные правовые риски содержания компании в офшоре</li>
					</ol>
				</div>
			</div>
		</div>
	);
}

export {Tasks}