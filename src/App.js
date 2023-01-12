import React from 'react';
import './App.css';

function News({ name, power, code }) {
	return (
		<div>
			<h2>{name}</h2>
			<p>{power}</p>
			<p>{code}</p>
		</div>
	);
}

const data = [
	{
		name: 'Haier',
		power: '5 kW',
    code: 'B235'
	},
  {
		name: 'Haier',
		power: '3,5 kW',
    code: 'B235'
	},
  {
		name: 'Lg',
		power: '2,5 kW',
    code: 'C654'
	},

];

function App() {
	return (
		<div className='App'>
      {data.map((elem) =>{
      return <News name={elem.name} power={elem.power} code={elem.code} />
  })}
		</div>
	);
}

export default App;
