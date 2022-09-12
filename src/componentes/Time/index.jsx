/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-filename-extension */

import { useEffect, useState } from 'react';
import Colaborador from '../Colaborador';
import './time.css';

function Time({ time, colaboradores, mudarCor }) {
	const [delUser, setDelUser] = useState(colaboradores);

	useEffect(() => setDelUser(colaboradores));

	const deletaUser = function deletaUser(param) {
		const colaboradoDeletado = param;
		const deletado = colaboradores.splice(
			colaboradores.indexOf(colaboradoDeletado),
			1
		);
		setDelUser(colaboradores);

		console.log(colaboradores, deletado);
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
				<input
					value={time.corSecundaria}
					type="color"
					className="input-color"
					onChange={(evento) => mudarCor(evento.target.value, time.id)}
				/>
				<h3 style={{ borderColor: time.corSecundaria }}>{time.nome}</h3>
				<div className="colaboradores">
					{delUser.map((colaborador, indice) => (
						<Colaborador
							// eslint-disable-next-line react/no-array-index-key
							key={indice}
							colaborador={colaborador}
							corDeFundo={time.corSecundaria}
							aoDeletar={() => deletaUser(colaborador, indice)}
						/>
					))}
				</div>
			</section>
		)
	);
}

export default Time;
