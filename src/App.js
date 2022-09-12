/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import hexToRgba from 'hex-rgba'
import { v4 as uuidv4 } from 'uuid';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

function App() {
	const [times, setTimes] = useState([
		{
			id: uuidv4(),
			nome: 'Programação',
			corPrimaria: '#D9F7E9',
			corSecundaria: '#57C278',
		},
		{
			id: uuidv4(),
			nome: 'Front-End',
			corPrimaria: '#E8F8FF',
			corSecundaria: '#82CFFA',
		},
		{
			id: uuidv4(),
			nome: 'Data Science',
			corPrimaria: '#F0F8E2',
			corSecundaria: '#A6D157',
		},
		{
			id: uuidv4(),
			nome: 'Devops',
			corPrimaria: '#FDE7E8',
			corSecundaria: '#E06B69',
		},
		{
			id: uuidv4(),
			nome: 'UX e Design',
			corPrimaria: '#FAE9F5',
			corSecundaria: '#DB6EBF',
		},
		{
			id: uuidv4(),
			nome: 'Mobile',
			corPrimaria: '#FFF5D9',
			corSecundaria: '#FFBA05',
		},
		{
			id: uuidv4(),
			nome: 'Inovação e Gestão',
			corPrimaria: '#FFEEDF',
			corSecundaria: '#FF8A29',
		},
	]);

	const inicial = [
		{
			id: uuidv4(),
			nome: 'JULIANA AMOASEI',
			cargo: 'Desenvolvedora de software e instrutora',
			imagem:
				'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
			time: times[0].nome,
		},
		{
			id: uuidv4(),
			nome: 'DANIEL ARTINE',
			cargo: 'Engenheiro de Software na Stone Age',
			imagem:
				'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
			time: times[0].nome,
		},
		{
			id: uuidv4(),
			nome: 'GUILHERME LIMA',
			cargo: 'Desenvolvedor Python e JavaScript na Alura',
			imagem:
				'	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
			time: times[0].nome,
		},
		{
			id: uuidv4(),
			nome: 'PAULO SILVEIRA',
			cargo: 'Hipster e CEO da Alura',
			imagem:
				'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
			time: times[0].nome,
		},
		{
			id: uuidv4(),
			nome: 'JULIANA AMOASEI',
			cargo: 'Desenvolvedora de software e instrutora',
			imagem:
				'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
			time: times[1].nome,
		},
		{
			nome: 'DANIEL ARTINE',
			cargo: 'Engenheiro de Software na Stone Age',
			imagem:
				'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
			time: times[1].nome,
		},
		{
			id: uuidv4(),
			nome: 'GUILHERME LIMA',
			cargo: 'Desenvolvedor Python e JavaScript na Alura',
			imagem:
				'	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
			time: times[1].nome,
		},
		{
			id: uuidv4(),
			nome: 'PAULO SILVEIRA',
			cargo: 'Hipster e CEO da Alura',
			imagem:
				'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
			time: times[1].nome,
		},
		{
			id: uuidv4(),
			nome: 'JULIANA AMOASEI',
			cargo: 'Desenvolvedora de software e instrutora',
			imagem:
				'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
			time: times[2].nome,
		},
		{
			id: uuidv4(),
			nome: 'DANIEL ARTINE',
			cargo: 'Engenheiro de Software na Stone Age',
			imagem:
				'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
			time: times[2].nome,
		},
		{
			id: uuidv4(),
			nome: 'GUILHERME LIMA',
			cargo: 'Desenvolvedor Python e JavaScript na Alura',
			imagem:
				'	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
			time: times[2].nome,
		},
		{
			id: uuidv4(),
			nome: 'PAULO SILVEIRA',
			cargo: 'Hipster e CEO da Alura',
			imagem:
				'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
			time: times[2].nome,
		},
		{
			id: uuidv4(),
			nome: 'JULIANA AMOASEI',
			cargo: 'Desenvolvedora de software e instrutora',
			imagem:
				'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
			time: times[3].nome,
		},
		{
			id: uuidv4(),
			nome: 'DANIEL ARTINE',
			cargo: 'Engenheiro de Software na Stone Age',
			imagem:
				'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
			time: times[3].nome,
		},
		{
			id: uuidv4(),
			nome: 'GUILHERME LIMA',
			cargo: 'Desenvolvedor Python e JavaScript na Alura',
			imagem:
				'	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
			time: times[3].nome,
		},
		{
			id: uuidv4(),
			nome: 'PAULO SILVEIRA',
			cargo: 'Hipster e CEO da Alura',
			imagem:
				'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
			time: times[3].nome,
		},
		{
			id: uuidv4(),
			nome: 'JULIANA AMOASEI',
			cargo: 'Desenvolvedora de software e instrutora',
			imagem:
				'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
			time: times[4].nome,
		},
		{
			id: uuidv4(),
			nome: 'DANIEL ARTINE',
			cargo: 'Engenheiro de Software na Stone Age',
			imagem:
				'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
			time: times[4].nome,
		},
		{
			id: uuidv4(),
			nome: 'GUILHERME LIMA',
			cargo: 'Desenvolvedor Python e JavaScript na Alura',
			imagem:
				'	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
			time: times[4].nome,
		},
		{
			id: uuidv4(),
			nome: 'PAULO SILVEIRA',
			cargo: 'Hipster e CEO da Alura',
			imagem:
				'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
			time: times[4].nome,
		},
		{
			id: uuidv4(),
			nome: 'JULIANA AMOASEI',
			cargo: 'Desenvolvedora de software e instrutora',
			imagem:
				'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
			time: times[5].nome,
		},
		{
			id: uuidv4(),
			nome: 'DANIEL ARTINE',
			cargo: 'Engenheiro de Software na Stone Age',
			imagem:
				'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
			time: times[5].nome,
		},
		{
			id: uuidv4(),
			nome: 'GUILHERME LIMA',
			cargo: 'Desenvolvedor Python e JavaScript na Alura',
			imagem:
				'	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
			time: times[5].nome,
		},
		{
			id: uuidv4(),
			nome: 'PAULO SILVEIRA',
			cargo: 'Hipster e CEO da Alura',
			imagem:
				'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
			time: times[5].nome,
		},
	];

	const [colaboradores, setColaboradores] = useState(inicial);

	const mudarCorDoTime = function mudarCorDoTime(cor, id) {
		setTimes(times.map(time => {
			if(time.id === id){
				time.corSecundaria = cor
				time.corPrimaria = hexToRgba(cor, 50)
			}
			return time;
		}))
	}

	return (
		<div>
			<Banner />
			<Formulario
				times={times.map((time) => time.nome)}
				aoCadastrar={(colaborador) =>
					setColaboradores([...colaboradores, colaborador])
				}
			/>
			<section className="times">
				<h1>Minha organização</h1>
				{times.map((time, indice) => (
					<Time
						mudarCor={mudarCorDoTime}
						key={indice}
						time={time}
						colaboradores={colaboradores.filter(
							(colaborador) => colaborador.time === time.nome
						)}

					/>
				))}
			</section>
			<Rodape />
		</div>
	);
}

export default App;
