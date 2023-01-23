import React from 'react';

import News from './components/News'
import './App.css';



class AddNews extends React.Component {
	state = {
		date: new Date(),
		score: 5,
	};
	componentDidMount() {
		this.setState({ score: 8 });
	}

	render() {
		const { name, power, code } = this.props;
		const { score } = this.state;
		return (
			<div className='NewsClass'>
				<h2>{name}</h2>
				<p>{power}</p>
				<p>{code}</p>
				<p>{score}</p>
			</div>
		);
	}
}






const data = [
	{
		id: 1,
		name: 'Rotenso',
		power: '5 kW',
		code: 'B235',
	},
	{
		id: 3,
		name: 'Haier',
		power: '3,5 kW',
		code: 'B235',
	},
	{
		id: 2,
		name: 'Lg',
		power: '2,5 kW',
		code: 'C654',
	},
];

function App() {
	return (
		<div className='App'>
			{data.map((elem) => {
				return (
					<div>
						<News key={`news-${elem.id}`} name={elem.name} power={elem.power} code={elem.code} />
						<AddNews key={`news-${elem.id}`} name={elem.name} power={elem.power} code={elem.code} />
					</div>
				);
			})}
		</div>
	);
}

export default App;
