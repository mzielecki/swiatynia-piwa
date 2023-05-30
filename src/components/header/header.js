import React, { useState } from 'react';
import './header.css';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenuToggle = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<header className="header">
			<div className="logo"></div>
			<div className={`menu ${menuOpen ? 'open' : ''}`}>
				<div className="item">Nasze piwa</div>
				<div className="item">O nas</div>
				<div className="item">Kontakt</div>
			</div>
			<div
				className={`menu-toggle ${menuOpen ? 'open' : ''}`}
				onClick={handleMenuToggle}
			>
				<div className="bar"></div>
				<div className="bar"></div>
				<div className="bar"></div>
			</div>
		</header>
	);
};

export default Header;
