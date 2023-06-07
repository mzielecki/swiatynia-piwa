import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Description from './components/description/description';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/nasze-piwa" element={<Description />}></Route>
			</Routes>
			<Footer></Footer>
		</BrowserRouter>
	);
}

export default App;
