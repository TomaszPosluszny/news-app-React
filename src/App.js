import React from 'react';

import Header from './components/Header';

// import Articles from './pages/Articles';
import Content from './components/content';
import Footer from './components/Footer';
import Registration from './pages/Registration'
import './App.css';

function App() {
	return (
		<div>
			<Header />
			<Content>
				{/* <Articles /> */}
				<Registration/>
			</Content>
			<Footer/>
		</div>
	);
}

export default App;
