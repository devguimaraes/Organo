/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-filename-extension */

import Colaborador from '../Colaborador';
import './time.css';

function Time({ time, colaboradores, mudarCor, deletaUser, aoFavoritar }) {
	return (
		colaboradores.length > 0 && (
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
					{colaboradores.map((colaborador, id) => (
						<Colaborador
							// eslint-disable-next-line react/no-array-index-key
							key={id}
							aoFavoritar={aoFavoritar}
							colaborador={colaborador}
							corDeFundo={time.corSecundaria}
							aoDeletar={() => deletaUser(id)}
						/>
					))}
				</div>
			</section>
		)
	);
}

export default Time;
