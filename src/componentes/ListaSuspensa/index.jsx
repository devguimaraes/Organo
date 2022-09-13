/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './lista-suspensa.css';

function ListaSuspensa({
	label,
	items,
	valor,
	aoAlterado,
	obrigatorio = false,
}) {
	return (
		<div className="lista-suspensa">
			<label>{label}</label>
			<select
				key={items}
				required={obrigatorio}
				value={valor}
				onChange={(evento) => aoAlterado(evento.target.value)}
			>
				{items.map((item) => (
					<option key={item}>{item}</option>
				))}
			</select>
		</div>
	);
}

export default ListaSuspensa;
