import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>Brap Brap Brap!</p>
				<h1>What's going on!</h1>
				<h3>v cool man</h3>
				<h4>Changed on the feature branch</h4>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
