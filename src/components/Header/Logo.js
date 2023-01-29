import React from 'react';

import logopng from './mastarnowy.png';

const styles = {
	width: 400 ,
	height: 200,
};

function Logo() {
	return (
		<div>
			<img src={logopng} alt='logo' style = {styles}/>{' '}
		</div>
	);
}
export default Logo;
