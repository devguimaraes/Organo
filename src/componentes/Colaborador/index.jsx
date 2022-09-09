/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import { AiFillCloseCircle } from 'react-icons/ai';
import './colaborador.css';

const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {
	return (
		<div className="colaborador">
			<AiFillCloseCircle size={20} onClick={aoDeletar} className="deletar" />

			<div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
				<img src={colaborador.imagem} alt={colaborador.nome} />
			</div>
			<div className="rodape">
				<h4>{colaborador.nome}</h4>
				<h5>{colaborador.cargo}</h5>
			</div>
		</div>
	);
};

export default Colaborador;
