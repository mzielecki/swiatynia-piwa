import Header from './components/header/header';
import Carousel from './components/carousel/carousel';
import Footer from './components/footer/footer';
import './App.css';

function App() {
	return (
		<div className="App">
			<Header></Header>
			<h2 className="heading-text">ŚWIĄTYNIA PIWA</h2>
			<Carousel></Carousel>
			<Footer></Footer>
		</div>
	);
}

export default App;
