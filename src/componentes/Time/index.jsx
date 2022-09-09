/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-filename-extension */

import { useEffect, useState } from 'react';
import Colaborador from '../Colaborador';
import './time.css';

function Time({ time, colaboradores }) {
	const [delUser, setDelUser] = useState([]);

	useEffect(() => setDelUser(colaboradores));

	const deletaUser = function deletaUser(param) {
		delUser.splice(delUser.indexOf(param), 1);

		console.log(delUser);
	};
	return (
		delUser.length > 0 && (
			<section
				className="time"
				style={{
					backgroundImage: 'url(/imagens/fundo.png)',
					backgroundColor: time.corPrimaria,
				}}
			>
				<h3 style={{ borderColor: time.corSecundaria }}>{time.nome}</h3>
				<div className="colaboradores">
					{delUser.map((colaborador, indice) => (
						<Colaborador
							// eslint-disable-next-line react/no-array-index-key
							key={indice}
							colaborador={colaborador}
							corDeFundo={time.corSecundaria}
							aoDeletar={() => deletaUser(colaborador)}
						/>
					))}
				</div>
			</section>
		)
	);
}

export default Time;
