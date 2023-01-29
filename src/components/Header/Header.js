import React from 'react';
import Menu from './Menu';
import Logo from './Logo';
import NavLink from './NavLink';

function Header() {
	return (
		<div>
			<div>
				<Logo />
			</div>
			<Menu>
				<NavLink to= "/" label="Link 1"/>
				<NavLink to= "/" label="Link 2"/>
				<NavLink to= "/" label="Link 3"/>
			</Menu>
		</div>
	);
}

export default Header;
