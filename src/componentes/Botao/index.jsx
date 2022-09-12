import './botao.css';

function Botao({ texto }) {
	return (
		<button type="button" className="botao">
			{texto}
		</button>
	);
}

export default Botao;
