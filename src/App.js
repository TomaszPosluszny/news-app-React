import React from 'react';
import './App.css';

class AddNews extends React.Component {
	render() {
		const { name, power, code } = this.props;
		return (
			<div className='News'>
				<h2>{name}</h2>
				<p>{power}</p>
				<p>{code}</p>
			</div>
		);
	}
}

function News({ name, power, code }) {
	return (
		<div className='News'>
			<h2>{name}</h2>
			<p>{power}</p>
			<p>{code}</p>
		</div>
	);
}

const data = [
	{
		name: 'Rotenso',
		power: '5 kW',
		code: 'B235',
	},
	{
		name: 'Haier',
		power: '3,5 kW',
		code: 'B235',
	},
	{
		name: 'Lg',
		power: '2,5 kW',
		code: 'C654',
	},
];

function App() {
	return (
		<div className='App'>
			{data.map((elem) => {
				return <div><News name={elem.name} power={elem.power} code={elem.code} />
				<AddNews name={elem.name} power={elem.power} code={elem.code} /></div>;
			})}
		</div>
	);
}

export default App;
