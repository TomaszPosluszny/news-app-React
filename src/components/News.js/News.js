import React, { useState } from 'react';

import './News.css';
import Power from '../Power/Power';
import Scoring from '../Scoring/Scoring';

function News({ name, power, code }) {
	const [scoreAdd] = useState(`6+`);
	return (
		<div className='News'>
			<h2>{name}</h2>
			<Power power={power} />
			<p>{code}</p>
			<Scoring score={scoreAdd} />
		</div>
	);
}

export default News;
