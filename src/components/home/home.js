import Carousel from '../../components/carousel/carousel';
import Content from '../../components/content/content';
import '../../App.css';
import { Route } from 'react-router-dom';

function Home() {
	<Route exact path="/">
		<Home />
	</Route>;

	return (
		<div className="App">
			<h1 className="heading-text">
				<b>ŚWIĄTYNIA PIWA</b>
			</h1>
			<Content></Content>
			<Carousel></Carousel>
		</div>
	);
}

export default Home;
