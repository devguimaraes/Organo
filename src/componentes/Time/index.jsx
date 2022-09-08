/* eslint-disable react/jsx-filename-extension */
import Colaborador from '../Colaborador';
import './time.css';

function Time({ time, colaboradores }) {
	return (
		colaboradores.length > 0 && (
			<section
				className="time"
				style={{
					backgroundImage: 'url(/imagens/fundo.png)',
					backgroundColor: time.corPrimaria,
				}}
			>
				<h3 style={{ borderColor: time.corSecundaria }}>{time.nome}</h3>
				<div className="colaboradores">
					{colaboradores.map((colaborador, indice) => (
						<Colaborador
							// eslint-disable-next-line react/no-array-index-key
							key={indice}
							colaborador={colaborador}
							corDeFundo={time.corSecundaria}
						/>
					))}
				</div>
			</section>
		)
	);
}

export default Time;
