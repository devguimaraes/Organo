/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/function-component-definition */
import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './formulario.css';

const Formulario = ({ aoCadastrar, times, CadastrarTime }) => {
	const [nome, setNome] = useState('');
	const [cargo, setCargo] = useState('');
	const [imagem, setImagem] = useState('');
	const [time, setTime] = useState('');
	// novo time
	const [nomeTime, setNomeTime] = useState('');
	const [nomeCor, setCorTime] = useState('');
	const [nomeCorSecundaria, setCorTimeSecundaria] = useState('');

	const aoSubmeter = (evento) => {
		evento.preventDefault();
		console.log('form enviado', nome, cargo, imagem, time);
		aoCadastrar({
			nome,
			cargo,
			imagem,
			time,
		});
	};

	return (
		<section className="formulario-container">
			<form className="formulario" onSubmit={aoSubmeter}>
				<h2>Preencha os dados para criar o card do colaborador.</h2>
				<CampoTexto
					obrigatorio={true}
					label="Nome"
					placeholder="Digite seu nome "
					valor={nome}
					aoAlterado={(valor) => setNome(valor)}
				/>
				<CampoTexto
					obrigatorio={true}
					label="Cargo"
					placeholder="Digite seu cargo "
					valor={cargo}
					aoAlterado={(valor) => setCargo(valor)}
				/>
				<CampoTexto
					label="Imagem"
					placeholder="Informe o endereço da imagem "
					aoAlterado={(valor) => setImagem(valor)}
				/>
				<ListaSuspensa
					obrigatorio={true}
					label="Times"
					items={times}
					valor={time}
					aoAlterado={(valor) => setTime(valor)}
				/>
				<Botao texto="Criar card" />
			</form>
			<form
				className="formulario"
				onSubmit={(evento) => {
					evento.preventDefault();
					console.log('time cadastrado');
					CadastrarTime({ nomeTime, nomeCor, nomeCorSecundaria });
				}}
			>
				<h2>Preencha os dados para criar um novo time</h2>
				<CampoTexto
					obrigatorio
					label="Nome"
					placeholder="Digite o nome de time "
					valor={nomeTime}
					aoAlterado={(valor) => setNomeTime(valor)}
				/>
				<CampoTexto
					obrigatorio
					label="Cor de Time"
					placeholder="Digite a cor primaria"
					valor={nomeCor}
					aoAlterado={(valor) => setCorTime(valor)}
				/>
				<CampoTexto
					obrigatorio
					label="Cor Secundaria do Time"
					placeholder="Digite a cor secundaria"
					valor={nomeCorSecundaria}
					aoAlterado={(valor) => setCorTimeSecundaria(valor)}
				/>

				<Botao texto="Criar novo Time" />
			</form>
		</section>
	);
};

export default Formulario;
