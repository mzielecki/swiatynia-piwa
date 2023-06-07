import React, { useState } from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenuToggle = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<header className="header">
			<NavLink className={'logo'} to={'/'}></NavLink>
			<div className={`menu ${menuOpen ? 'open' : ''}`}>
				<NavLink className={'item'} to={'/nasze-piwa'} exact>
					Nasze piwa
				</NavLink>
				<NavLink className={'item'} to={'/o-nas'}>
					O nas
				</NavLink>
				<NavLink className={'item'} to={'/kontakt'}>
					Kontakt
				</NavLink>
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
