import React from 'react';
import News from '../components/News.js';

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

function Articles() {
	return (
		<div>
			{data.map((elem) => (
				<News
					key={`news-${elem.id}`}
					name={elem.name}
					power={elem.power}
					code={elem.code}
				/>
			))}
		</div>
	);
}

export default Articles;
