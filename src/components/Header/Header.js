import React from 'react';

import Logo from './Logo';
import NavLink from './NavLink';

function Header() {
	return (
		<div>
			<div>
				<Logo />
			</div>
			<div>
				<NavLink to= "/" label="Link 1"/>
				<NavLink to= "/" label="Link 1"/>
				<NavLink to= "/" label="Link 1"/>
			</div>
		</div>
	);
}

export default Header;
