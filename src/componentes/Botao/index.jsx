import './botao.css';

function Botao({ texto }) {
	return (
		<button type="submit" className="botao">
			{texto}
		</button>
	);
}

export default Botao;
