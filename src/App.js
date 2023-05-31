import Header from './components/header/header';
import Carousel from './components/carousel/carousel';
import Footer from './components/footer/footer';
import Content from './components/bottom-content/content';
import './App.css';

function App() {
	return (
		<div className="App">
			<Header></Header>
			<h1 className="heading-text">
				<b>ŚWIĄTYNIA PIWA</b>
			</h1>
			<Content></Content>
			<Carousel></Carousel>
			<Footer></Footer>
		</div>
	);
}

export default App;
