import React from 'react';
import './content.css';

function Content() {
	return (
		<div className="content">
			<div className="content-wrapper">
				<span style={{ fontSize: '30px' }}>Nasze piwa </span>{' '}
				<span style={{ fontSize: '20px' }}>
					robione są z najlepszych składników, według sprawdzonych przepisów
					oraz produktów. Każde nasze piwo jest starannie przygotowywane z
					wykorzystaniem profesjonalnego sprzętu oraz dokładnych urządzeń
					pomiarowych. Ze względu na to, że ważymy piwa w różnych stylach, każdy
					nasz przepis jest sprawdzony ze standardem stylu danego piwa.
				</span>
			</div>
		</div>
	);
}

export default Content;
