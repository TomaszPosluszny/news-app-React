import React from 'react';

import Header from './components/Header';

import Articles from './pages/Articles';
import Content from './components/content';
import Footer from './components/Footer';
import './App.css';

function App() {
	return (
		<div>
			<Header />
			<Content>
				<Articles />
			</Content>
			<Footer/>
		</div>
	);
}

export default App;
