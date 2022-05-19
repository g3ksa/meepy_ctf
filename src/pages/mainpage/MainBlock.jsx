//import './MainBlock.css';
import About from './About';
import Maps from './Maps';

function MainBlock(){
	return(
		<div className="main">
			<div className="container">
				<About />
				<Maps />
			</div>
		</div>
	);
}
export {MainBlock};