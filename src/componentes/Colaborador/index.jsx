/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './colaborador.css';

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
	const favoritarEstaMerdaCaralho = function favoritarEstaMerdaCaralho() {
		aoFavoritar(colaborador.id);
	};

	const propsIcons = {
		size: 25,
		onClick: favoritarEstaMerdaCaralho,
	};

	return (
		<div className="colaborador">
			<AiFillCloseCircle
				size={20}
				onClick={() => aoDeletar(colaborador)}
				className="deletar"
			/>

			<div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
				<img src={colaborador.imagem} alt={colaborador.nome} />
			</div>
			<div className="rodape">
				<h4>{colaborador.nome}</h4>
				<h5>{colaborador.cargo}</h5>
				<div className="favoritar">
					{colaborador.favorito ? (
						<AiFillHeart {...propsIcons} style={{ color: 'red' }} />
					) : (
						<AiOutlineHeart {...propsIcons} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Colaborador;
